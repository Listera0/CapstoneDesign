package com.example.demo.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.DeveloperDto;

@Repository
public class LoginDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    DeveloperDao devRepository;

    public Map<String, String> requestSignUp (Map<String, String> request) {
        String query = String.format("select * from developer where email = '%s'", request.get("email"));
        List<DeveloperDto> loginData = DPJdbcTemplate.query(query, new DevRowMapper());

        Map<String, String> answer = new HashMap<String, String>();

        if(loginData.size() < 1)
        {
            // String result = loginRepository.insertToDatabase(nextId, request.get("name"), request.get("email"), request.get("password"));

            String query2 = "insert into developer (email, password, name, job, career, region, skill, introduce, urlGithub, urlInsta, imgURL, phone, provider, providerId) " +
                                            "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            try
            {
                DPJdbcTemplate.update(query2, request.get("email"), request.get("password"), request.get("name"), request.get("job"), request.get("career"), 
                                            request.get("region"), request.get("skill"), request.get("introduce"), request.get("urlGithub"), request.get("urlInsta"), 
                                            request.get("imgURL"), request.get("phone"), request.get("provider"), request.get("providerId"));

                answer.put("result", "true");
                answer.put("message", "회원가입에 성공하였습니다.");
            }
            catch(DataAccessException  e)
            {
                answer.put("result", "false");
                answer.put("message", "회원가입에 실패하였습니다.");
            }
        }
        else{
            answer.put("result", "false");
            answer.put("message", "이미 존재하는 사용자 입니다.");
            answer.put("email", request.get("email"));
        }
        
        return answer;
    }

    public Map<String, String> requestLogin (String email, String password) {
        String query = "select * from developer where email = '" + email + "'";
        List<DeveloperDto> loginData = DPJdbcTemplate.query(query, new DevRowMapper());
        
        Map<String, String> answer = new HashMap<String, String>();
        
        if(loginData.size() >= 1)
        {
            if(loginData.get(0).getPassword().equals(password))
            {
                answer.put("result", "true");
                answer.put("id", Integer.toString(loginData.get(0).getId()));
                answer.put("message", "사용자 [" + loginData.get(0).getName() + "] 로그인 되었습니다.");
                return answer;
            }
            answer.put("result", "false");
            answer.put("message", "비밀번호가 옳지 않습니다.");

            return answer;
        }
        answer.put("result", "false");
        answer.put("message", "없는 사용자 입니다.");

        return answer;
    }

    public boolean hasEmail (String email) {
        String query = String.format("select * from developer where email=%d", email);
        List<DeveloperDto> loginData = DPJdbcTemplate.query(query, new DevRowMapper());

        if(loginData.size() >= 1)
            return true;
        return false;
    }
}
