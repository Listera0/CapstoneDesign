package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.*;

@RestController
public class KakaoController {
    @Autowired
    KakaoDao kakaoRepository;

    @RequestMapping(value="/api/kakao", method = RequestMethod.GET)
    public ResponseEntity<?> requestLogin(@RequestParam("code") String code) {
        try {
            String[] accessToken = kakaoRepository.getKaKaoAccessToken(code);
            String accessFoundInToken = accessToken[0];
            return ResponseEntity.ok().body(kakaoRepository.createKakaoUser(accessFoundInToken));
        }
        catch(IOException e) { System.out.println(e); }
        return ResponseEntity.ok().body(null);
    }
}
