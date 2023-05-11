package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.*;
import com.example.demo.DTO.*;

@RestController
public class MainController {

    @Autowired
    DeveloperDao devRepository;
    @Autowired
    StoryDao storyRepository;
    @Autowired
    ProjectDao projectRepository;
    @Autowired
    LoginDao loginDao;

    @RequestMapping(value="/api/requestLogin", method = RequestMethod.POST)
    public Map<String, String> requestLogin(@RequestBody Map<String, String> request) {
        List<DeveloperDto> loginData = loginDao.hasEmail(request.get("email"));
        Map<String, String> answer = new HashMap<String, String>();
        if(loginData.size() >= 1)
        {
            if(loginData.get(0).getPassword().equals(request.get("password")))
            {
                answer.put("result", "true");
                answer.put("id", loginData.get(0).getId());
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


    @RequestMapping(value="/api/insertDevData", method = RequestMethod.POST)
    public String insertDevData(@RequestBody DeveloperDto dto) {
        return devRepository.insertToDatabase(dto);
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