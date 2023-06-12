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

import com.example.demo.dto.*;

class LikeCountRowMapper implements RowMapper<LikeCountDto> {
    @Override
    @Nullable
    public LikeCountDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        LikeCountDto dto = new LikeCountDto();
        dto.setIndex(rs.getInt("index"));
        dto.setUserId(rs.getInt("userId"));
        dto.setTargetId(rs.getInt("targetId"));
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
        String query = String.format("select * from likecount_%s where userId = %d and targetId = %d", location, Integer.parseInt(userId), Integer.parseInt(targetId));
        String query2 = String.format("insert into likecount_%s (userId, targetId, isLike) values (?, ?, ?)", location);
        String query3 = String.format("update likecount_%s set isLike = ? where userId = ? and targetId = ?", location);

        String query4 = String.format("select * from %s where id = %d", location, Integer.parseInt(targetId));
        String query5 = String.format("update %s set likeCount = ? where id = ?", location);

        List<LikeCountDto> result = LKJdbcTemplate.query(query, new LikeCountRowMapper());
        int likecount = 0;

        switch (location) {
            case "developer":
                likecount =  DPJdbcTemplate.query(query4, new DevRowMapper()).get(0).getLikeCount();
            case "story":
                likecount =  DPJdbcTemplate.query(query4, new DevRowMapper()).get(0).getLikeCount(); // 변경 요청
            case "project":
                likecount =  DPJdbcTemplate.query(query4, new DevRowMapper()).get(0).getLikeCount(); // 변경 요청
        }

        if(result.size() >= 1) { // 데이터 존재시
            if(result.get(0).isLike() == true) {
                LKJdbcTemplate.update(query3, 0,  userId, targetId);
                DPJdbcTemplate.update(query5, likecount - 1, targetId);
                return false;
            } 
            else {
                LKJdbcTemplate.update(query3, 1,  userId, targetId);
                DPJdbcTemplate.update(query5, likecount + 1, targetId);
                return true;
            }
        }
        else {
            LKJdbcTemplate.update(query2, userId, targetId, 1);
            DPJdbcTemplate.update(query5, likecount + 1, targetId);
            return true;
        }
    }

    public List<LikeCountDto> userLikeCount(String location, String userId) {
        String query = String.format("select * from likecount_%s where userId = %d", location, Integer.parseInt(userId));
        List<LikeCountDto> result = LKJdbcTemplate.query(query, new LikeCountRowMapper());

        return result;
    }

    public void test() {
        String query = String.format("select * from developer");
        List<DeveloperDto> result = LKJdbcTemplate.query(query, new DevRowMapper());

        System.out.println(result);
    }
}
