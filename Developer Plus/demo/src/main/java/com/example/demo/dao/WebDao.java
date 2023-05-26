package com.example.demo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.DeveloperDto;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

@Repository
public class WebDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;
    
    // 카카오에서 access token 가져오기
    public String[] getKaKaoAccessToken(String code) {
        String restAPIKey = "92ac45fc775ab8bb9b58554b33464200";
        String redirectUri = "http://localhost:3000/KakaoLogin";

        String access_Token = "";
        String refresh_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        String result = null;
        String id_token = null;
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=" + restAPIKey); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri=" + redirectUri); // TODO 인가코드 받은 redirect_uri 입력
            System.out.println("code = " + code);
            sb.append("&code=" + code);
            bw.write(sb.toString());
            bw.flush();

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);
            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            // bearer 토큰 값만 추출(log에 찍히는 값의 이름은 id_Token)
            System.out.println("response body : " + result);
            String[] temp = result.split(",");
            id_token = temp[3].substring(11);
            System.out.println("idToken = " + id_token);


            // Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            // JsonParser parser = new JsonParser();
            // JsonElement element =  parser.parse(result);
            JsonElement element = JsonParser.parseString(result); 

            System.out.println("element : " + element);

            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        String[] arrTokens = new String[3];
        arrTokens[0] = access_Token;
        arrTokens[1] = refresh_Token;
        arrTokens[2] = id_token;

        return arrTokens;
    }

    public DeveloperDto getUserData(String token) throws IOException {
        DeveloperDto dto = new DeveloperDto();

        //1.유저 정보를 요청할 url
        String reqURL = "https://kapi.kakao.com/v2/user/me";

        //2.access_token을 이용하여 사용자 정보 조회
        URL url = new URL(reqURL);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

        //결과 코드가 200이라면 성공
        int responseCode = conn.getResponseCode();
        System.out.println("responseCode : " + responseCode);

        //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
        String line = "";
        String result = "";

        while ((line = br.readLine()) != null) {
            result += new String(URLDecoder.decode(line, "UTF-8"));
        }

        System.out.println("response body : " + result);

        //Gson 라이브러리로 JSON파싱
        JsonElement element = JsonParser.parseString(result);

        dto.setProvider("Kakao");
        Long id = element.getAsJsonObject().get("id").getAsLong();
        dto.setProviderId(id);
        boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
        //사용자의 이름
        String nickname = element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString();
        dto.setName(nickname);
        //사용자의 이메일
        String email = "";
        if (hasEmail) {
            email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
            dto.setEmail(email);
       }	
        
        return dto;
    }

    public Map<String, String> hasProviderId (String provider, long proId) {
        String query = String.format("select * from developer where provider='%s' and providerId=%s",provider ,Long.toString(proId));
        List<DeveloperDto> loginDataList = DPJdbcTemplate.query(query, new DevRowMapper());
        Map<String, String> answer = new HashMap<String, String>();

        if(loginDataList.size() >= 1) {
            answer.put("result", "true");
            answer.put("id", Integer.toString(loginDataList.get(0).getId()));
        }
        else {
            answer.put("result", "false");
        }

        return answer;
    }
}
