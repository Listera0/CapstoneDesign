package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.lang.Nullable;

import com.example.demo.dto.DeveloperLikeCountDto;
import com.example.demo.dto.ProjectLikeCountDto;
import com.example.demo.dto.StoryLikeCountDto;

class DevLikeCountRowMapper implements RowMapper<DeveloperLikeCountDto> {
    @Override
    @Nullable
    public DeveloperLikeCountDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        DeveloperLikeCountDto dto = new DeveloperLikeCountDto();
        dto.setIndex(rs.getInt("index"));
        dto.setUserId(rs.getInt("userId"));
        dto.setDeveloperId(rs.getInt("developerId"));
        dto.setLike(rs.getBoolean("isLike"));

        return dto;
    }
}

class StoryLikeCountRowMapper implements RowMapper<StoryLikeCountDto> {
    @Override
    @Nullable
    public StoryLikeCountDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        StoryLikeCountDto dto = new StoryLikeCountDto();
        dto.setIndex(rs.getInt("index"));
        dto.setUserId(rs.getInt("userId"));
        dto.setStoryId(rs.getInt("storyId"));
        dto.setLike(rs.getBoolean("isLike"));

        return dto;
    }
}

class ProjectLikeCountRowMapper implements RowMapper<ProjectLikeCountDto> {
    @Override
    @Nullable
    public ProjectLikeCountDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProjectLikeCountDto dto = new ProjectLikeCountDto();
        dto.setIndex(rs.getInt("index"));
        dto.setUserId(rs.getInt("userId"));
        dto.setProjectId(rs.getInt("projectId"));
        dto.setLike(rs.getBoolean("isLike"));

        return dto;
    }
}

@Repository
public class LikeCountDao {
    @Autowired
    @Qualifier("LKTemplate")
    JdbcTemplate LKJdbcTemplate;
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    public boolean likeInput(String location, String userId, String targetId) {
        String query = String.format("select * from likecount_%s where userId = %d and %sId = %d", location, Integer.parseInt(userId), location, Integer.parseInt(targetId));
        String query2 = String.format("insert into likecount_%s (userId, %sId, isLike) values (?, ?, ?)", location, location);
        String query3 = String.format("update likecount_%s set isLike = ? where userId = ? and %sId = ?", location, location);

        String query4 = String.format("select * from %s where id = %d", location, Integer.parseInt(targetId));
        String query5 = String.format("update %s set likeCount = ? where id = ?", location);

        switch (location) {
            case "developer":
                List<DeveloperLikeCountDto> result1 = LKJdbcTemplate.query(query, new DevLikeCountRowMapper());
                int likecount1 =  DPJdbcTemplate.query(query4, new DevRowMapper()).get(0).getLikeCount();
                if(result1.size() >= 1) { // 데이터 존재시
                    if(result1.get(0).isLike() == true) {
                        LKJdbcTemplate.update(query3, 0,  userId, targetId);
                        DPJdbcTemplate.update(query5, likecount1 - 1, targetId);
                        return false;
                    } 
                    else {
                        LKJdbcTemplate.update(query3, 1,  userId, targetId);
                        DPJdbcTemplate.update(query5, likecount1 + 1, targetId);
                        return true;
                    }
                }
                else {
                    LKJdbcTemplate.update(query2, userId, targetId, 1);
                    DPJdbcTemplate.update(query5, likecount1 + 1, targetId);
                    return true;
                }
            case "story" :
                List<StoryLikeCountDto> result2 = LKJdbcTemplate.query(query, new StoryLikeCountRowMapper());
                // int likecount2 = DPJdbcTemplate.query(query4, new StoryRowMapper()).get(0).getLikeCount();
                if(result2.size() >= 1) { // 데이터 존재시
                    if(result2.get(0).isLike() == true) {
                        LKJdbcTemplate.update(query3, 0,  userId, targetId);
                        // DPJdbcTemplate.update(query5, likecount2 - 1, targetId);
                        return false;
                    } 
                    else {
                        LKJdbcTemplate.update(query3, 1,  userId, targetId);
                        // DPJdbcTemplate.update(query5, likecount2 + 1, targetId);
                        return true;
                    }
                }
                else {
                    LKJdbcTemplate.update(query2, userId, targetId, 1);
                    // DPJdbcTemplate.update(query5, likecount2 + 1, targetId);
                    return true;
                }
            case "project" :
                List<ProjectLikeCountDto> result3 = LKJdbcTemplate.query(query, new ProjectLikeCountRowMapper());
                // int likecount3 = DPJdbcTemplate.query(query4, new ProjectRowMapper()).get(0).getLikeCount();
                if(result3.size() >= 1) { // 데이터 존재시
                    if(result3.get(0).isLike() == true) {
                        LKJdbcTemplate.update(query3, 0,  userId, targetId);
                        // DPJdbcTemplate.update(query5, likecount3 - 1, targetId);
                        return false;
                    } 
                    else {
                        LKJdbcTemplate.update(query3, 1,  userId, targetId);
                        // DPJdbcTemplate.update(query5, likecount3 + 1, targetId);
                        return true;
                    }
                }
                else {
                    LKJdbcTemplate.update(query2, userId, targetId, 1);
                    // DPJdbcTemplate.update(query5, likecount3 + 1, targetId);
                    return true;
                }
        }

        return false;
    }
}
