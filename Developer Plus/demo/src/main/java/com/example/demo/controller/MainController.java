package com.example.demo.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    @Autowired
    LikeCountDao likeCountRepository;
    @Autowired
    ChatDao chatRepository;


    // 로그인 요청
    @RequestMapping(value="/api/requestLogin", method = RequestMethod.POST)
    public Map<String, String> requestLogin(@RequestBody Map<String, String> request) {
        return loginRepository.requestLogin(request.get("email"), request.get("password"));
    }

    @RequestMapping(value="/test/", method = RequestMethod.POST)
    public void test() {
        likeCountRepository.test();
    }

    // 회원가입 요청
    @RequestMapping(value="/api/requestSignUp", method = RequestMethod.POST)
    public Map<String, String> requestSignUp(@RequestBody Map<String, String> request) {
        return loginRepository.requestSignUp(request);
    }

    // 중복 이메일 확인 요청
    @RequestMapping(value="/api/emailDuplicate", method = RequestMethod.GET)
    public Map<String, String> emailDuplicate(@RequestParam("email")String email) throws IOException {
        return loginRepository.hasEmail(email);
    }
    // 스토리 작성
    @RequestMapping(value="/api/insertStory", method = RequestMethod.POST)
    public String insertStory(@RequestBody Map<String, String> request) {
        return storyRepository.insertToDatabase(request);
    }

    // 프로젝트 작성
    @RequestMapping(value="/api/insertProject", method = RequestMethod.POST)
    public String insertProject(@RequestBody Map<String, String> request) {
        return projectRepository.insertToDatabase(request);
    }
    // 유저의 좋아요 기록 가져오기
    @RequestMapping(value="/api/userLikeCount", method = RequestMethod.POST)
    public List<LikeCountDto> userLikeCount(@RequestBody Map<String, String> request) {
        return likeCountRepository.userLikeCount(request.get("location"), request.get("userId"));
    }

    // 좋아요 버튼 기능
    @RequestMapping(value="/api/likeInput", method = RequestMethod.POST)
    public Boolean likeInput(@RequestBody Map<String, String> request) {
        return likeCountRepository.likeInput(request.get("location"), request.get("userId"), request.get("targetId"));
    }

    // 스토리에 댓글 입력
    @RequestMapping(value="/api/insertChat", method = RequestMethod.POST)
    public void insertChat(@RequestBody Map<String, String> request) {
        chatRepository.insertChat(request);
    }

    // 스토리 댓글 삭제
    @RequestMapping(value="/api/deleteChat", method = RequestMethod.POST)
    public void deleteChat(@RequestBody Map<String, String> request) {
        chatRepository.deleteChat(request);
    }

    // 대상 스토리의 댓글 전부 가져오기
    @RequestMapping(value="/api/getChatHistory", method = RequestMethod.POST)
    public List<ChatDto> getChatHistory(@RequestBody Map<String, String> request) {
        return chatRepository.getChatHistory(request.get("targetId"));
    }

    // 모든 Developer 데이터 가져오기
    @RequestMapping(value="/api/getAllDevData", method = RequestMethod.GET)
    public List<DeveloperDto> getAllDevData() {
        return devRepository.getDataAll();
    }

    // 모든 Story 데이터 가져오기
    @RequestMapping(value="/api/getAllStoryData", method = RequestMethod.GET)
    public List<StoryDto> getAllStoryData() {
        return storyRepository.getDataAll();
    }

    // 모든 Project 데이터 가져오기
    @RequestMapping(value="/api/getAllProjectData", method = RequestMethod.GET)
    public List<ProjectDto> getAllProjectData() {
        return projectRepository.getDataAll();
    }

    // 특정 Developer 데이터 가져오기
    @RequestMapping(value="/api/getDevData", method = RequestMethod.POST)
    public List<DeveloperDto> getDevData(@RequestBody Map<String, String> request) {
        return devRepository.getData(request.get("id"), request.get("orderBy"), request.get("limit"));
    }

    // 특정 Story 데이터 가져오기
    @RequestMapping(value="/api/getStoryData", method = RequestMethod.POST)
    public List<StoryDto> getStoryData(@RequestBody Map<String, String> request) {
        return storyRepository.getData(request.get("id"), request.get("orderBy"), request.get("limit"));
    }

    // 특정 Project 데이터 가져오기
    @RequestMapping(value="/api/getProjectData", method = RequestMethod.POST)
    public List<ProjectDto> getProjectData(@RequestBody Map<String, String> request) {
        return projectRepository.getData(request.get("id"), request.get("orderBy"), request.get("limit"));
    }
    // 프로젝트 조회수 기능
    @RequestMapping(value="/api/viewInputProject", method = RequestMethod.POST)
    public String addViewCountProject(@RequestBody Map<String, String> request) {
        return projectRepository.addViewCount(request);
    }

    // 스토리 조회수 기능
    @RequestMapping(value="/api/viewInputStory", method = RequestMethod.POST)
    public String addViewCountStory(@RequestBody Map<String, String> request) {
        return storyRepository.addViewCount(request);
    }
}