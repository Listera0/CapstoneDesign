package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dao.*;
import com.example.demo.dto.*;

@RestController
public class MainController {

    @Autowired
    DeveloperDao devRepository;
    @Autowired
    StoryDao storyRepository;
    @Autowired
    ProjectDao projectRepository;
    @Autowired
    LoginDao loginRepository;

    @RequestMapping(value="/api/requestLogin", method = RequestMethod.POST)
    public Map<String, String> requestLogin(@RequestBody Map<String, String> request) {
        List<DeveloperDto> loginData = loginRepository.hasEmail(request.get("email"));
        Map<String, String> answer = new HashMap<String, String>();
        if(loginData.size() >= 1)
        {
            if(loginData.get(0).getPassword().equals(request.get("password")))
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


    @RequestMapping(value="/api/getAllDevData", method = RequestMethod.GET)
    public List<DeveloperDto> getAllDevData() {
        return devRepository.getDataAll();
    }

    @RequestMapping(value="/api/getAllStoryData", method = RequestMethod.GET)
    public List<StoryDto> getAllStoryData() {
        return storyRepository.getDataAll();
    }

    @RequestMapping(value="/api/getAllProjectData", method = RequestMethod.GET)
    public List<ProjectDto> getAllProjectData() {
        return projectRepository.getDataAll();
    }


    @RequestMapping(value="/api/getDevData", method = RequestMethod.POST)
    public List<DeveloperDto> getDevData(@RequestBody Map<String, String> request) {
        return devRepository.getData(request.get("id"), request.get("orderBy"), request.get("limit"));
    }

    @RequestMapping(value="/api/getStoryData", method = RequestMethod.POST)
    public List<StoryDto> getStoryData(@RequestBody Map<String, String> request) {
        return storyRepository.getData(request.get("id"), request.get("orderBy"), request.get("limit"));
    }

    @RequestMapping(value="/api/getProjectData", method = RequestMethod.POST)
    public List<ProjectDto> getProjectData(@RequestBody Map<String, String> request) {
        return projectRepository.getData(request.get("id"), request.get("orderBy"), request.get("limit"));
    }


    @RequestMapping(value="/api/requestSignUp", method = RequestMethod.POST)
    public Map<String, String> requestSignUp(@RequestBody Map<String, String> request) {
        List<DeveloperDto> loginData = loginRepository.hasEmail(request.get("email"));
        List<DeveloperDto> lastData = devRepository.getData("", "id desc", "1");
        Map<String, String> answer = new HashMap<String, String>();
        if(loginData.size() < 2)
        {
            int nextId = lastData.get(0).getId() + 1;
            String result = loginRepository.insertToDatabase(nextId, request.get("name"), request.get("email"), request.get("password"));
            
            if(result.equals("Success"))
            {
                answer.put("result", "true");
                answer.put("message", "회원가입에 성공하였습니다.");
                answer.put("id", Integer.toString(nextId));
                return answer;
            }
            else
            {
                answer.put("result", "false");
                answer.put("message", "회원가입에 실패하였습니다.");
                return answer;
            }
        }
        answer.put("result", "false");
        answer.put("message", "이미 존재하는 사용자 입니다.");

        return answer;
    }


    @RequestMapping(value="/api/insertDevData", method = RequestMethod.POST)
    public String insertDevData2(@RequestBody DeveloperDto dto) {
        return "";
    }

    @RequestMapping(value="/api/insertStoryData", method = RequestMethod.POST)
    public String insertStoryData(@RequestBody StoryDto dto) {
        return storyRepository.insertToDatabase(dto);
    }

    @RequestMapping(value="/api/insertProjectData", method = RequestMethod.POST)
    public String insertProjectData(@RequestBody ProjectDto dto) {
        return projectRepository.insertToDatabase(dto);
    }
}