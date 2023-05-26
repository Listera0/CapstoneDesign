package com.example.demo.controller;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.*;
import com.example.demo.dto.*;

@RestController
public class WebController {
    @Autowired
    WebDao webRepository;
    @Autowired
    LoginDao loginRepository;

    // Kakao
    @RequestMapping(value="/api/auth/kakao", method = RequestMethod.GET)
    public DeveloperDto requestLogin(@RequestParam("code")String code) throws IOException {
        String[] accessTokens = webRepository.getKaKaoAccessToken(code);
        DeveloperDto devDto = webRepository.getUserData(accessTokens[0]);
        return devDto;
    }

    @RequestMapping(value="/api/auth/hasProId", method = RequestMethod.GET)
    public Map<String, String> hasProId(@RequestParam("proId")long proId, @RequestParam("provider")String provider) throws IOException {
        return webRepository.hasProviderId(provider, proId);
    }

    
}
