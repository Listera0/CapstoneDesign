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
    CommentDao commentRepository;
    @Autowired
    SearchDao searchRepository;
    @Autowired
    AlertDao alertRepository;
    @Autowired
    ChatInfoDao chatInfoRepository;
    @Autowired
    ChatAlertDao chatAlertRepository;
    @Autowired
    ChatDao chatRepository;

    // 로그인 요청
    @RequestMapping(value="/api/requestLogin", method = RequestMethod.POST)
    public Map<String, String> requestLogin(@RequestBody Map<String, String> request) {
        return loginRepository.requestLogin(request.get("email"), request.get("password"));
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
        commentRepository.insertChat(request);
    }

    // 스토리 댓글 삭제
    @RequestMapping(value="/api/deleteChat", method = RequestMethod.POST)
    public void deleteChat(@RequestBody Map<String, String> request) {
        commentRepository.deleteChat(request);
    }

    // 대상 스토리의 댓글 전부 가져오기
    @RequestMapping(value="/api/getChatHistory", method = RequestMethod.POST)
    public List<CommentDto> getChatHistory(@RequestBody Map<String, String> request) {
        return commentRepository.getChatHistory(request.get("targetId"));
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
    
    // 유저 정보 변경 요청
    @RequestMapping(value="/api/updateUser", method = RequestMethod.POST)
    public String updateUser(@RequestBody Map<String, String> request) {
        return devRepository.updateUser(request);
    }

    // 프로젝트 데이터 검색
    @RequestMapping(value="/api/searchProjectData", method = RequestMethod.POST)
    public List<ProjectDto> searchProjectData(@RequestBody Map<String, String> request) {
        return searchRepository.searchProjectData(request);
    }

    // 스토리 데이터 검색
    @RequestMapping(value="/api/searchStoryData", method = RequestMethod.POST)
    public List<StoryDto> searchStoryData(@RequestBody Map<String, String> request) {
        return searchRepository.searchStoryData(request);
    }

    // 유저 데이터 검색
    @RequestMapping(value="/api/searchDevData", method = RequestMethod.POST)
    public List<DeveloperDto> searchDevData(@RequestBody Map<String, String> request) {
        return searchRepository.searchDevData(request);
    }

    // 유저 알림 가져오기  (reciver)
    @RequestMapping(value="/api/getAlert", method = RequestMethod.POST)
    public List<AlertDto> getAlert(@RequestBody Map<String, String> request) {
        return alertRepository.getAlert(request);
    }

    // 유저 알림 추가  (reciver, sender, type, comment)
    @RequestMapping(value="/api/setAlert", method = RequestMethod.POST)
    public void setAlert(@RequestBody Map<String, String> request) {
        alertRepository.setAlert(request);
    }

    // 유저 알림 삭제  (id)
    @RequestMapping(value="/api/removeAlert", method = RequestMethod.POST)
    public void removeAlert(@RequestBody Map<String, String> request) {
        alertRepository.removeAlert(request);
    }

    // 프로젝트 nowJob 카운트 증가  (id)
    @RequestMapping(value="/api/updateNowJob", method = RequestMethod.POST)
    public String updateNowJob(@RequestBody Map<String, String> request) {
        return projectRepository.updateNowJob(request);
    }



    

    // 채팅방 생성하기 (title) (글 작성 하면 이거 한번 실행해도 될듯)
    @RequestMapping(value="/api/createChat", method = RequestMethod.POST)
    public void createChat(@RequestBody Map<String, String> request) {
        chatInfoRepository.createChat(request);
    }

    // 공지 작성 구문 추가
    @RequestMapping(value="/api/insertChatAlert", method = RequestMethod.POST)
    public void insertChatAlert(@RequestBody Map<String, String> request) {
        chatAlertRepository.insertChatAlert(request);
    }

    // 채팅 입력 (id, userId, content)
    @RequestMapping(value="/api/insertCommentChat", method = RequestMethod.POST)
    public void insertCommentChat(@RequestBody Map<String, String> request) {
        chatRepository.insertChat(request);
    }

    // 멤버 추가하는 구문(수락하면 자동 가입으로 해도 될듯)
    // 개발자 데이터베이스에 참여한 카톡방 ID 추가해야할듯
    @RequestMapping(value="/api/addMemberToChat", method = RequestMethod.POST)
    public void addMemberToChat(@RequestBody Map<String, String> request) {
        chatInfoRepository.addMemberToChat(request);
    }


    // 채팅방 정보 받아오는 구문
    @RequestMapping(value="/api/getChatInfo", method = RequestMethod.POST)
    public List<ChatInfoDto> getChatInfo(@RequestBody Map<String, String> request) {
        return chatInfoRepository.getChatInfo(request);
    }

    // 공지 받아오는 구문
    @RequestMapping(value="/api/getChatAlert", method = RequestMethod.POST)
    public List<ChatAlertDto> getChatAlert(@RequestBody Map<String, String> request) {
        return chatAlertRepository.getChatAlert(request);
    }

    // 구간을 정해 채팅 10개씩 받아오기 (id)
    @RequestMapping(value="/api/getCommentChatHistory", method = RequestMethod.POST)
    public List<ChatDto> getCommentChatHistory(@RequestBody Map<String, String> request) {
        return chatRepository.getChatHistory(request);
    }
}