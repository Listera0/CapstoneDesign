package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.*;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;


class StoryRowMapper implements RowMapper<StoryDto> {
    @Override
    @Nullable
    public StoryDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        StoryDto dto = new StoryDto();
        dto.setId(rs.getInt("id"));
        dto.setTitle(rs.getString("title"));
        dto.setImgURL(rs.getString("imgURL"));
        dto.setName(rs.getString("name"));
        dto.setContent(rs.getString("content"));
        dto.setHashTag(rs.getString("hashTag"));
        dto.setViewCount(rs.getInt("viewCount"));
        dto.setLikeCount(rs.getInt("likeCount"));
        dto.setChatCount(rs.getInt("chatCount"));
        return dto;
    }
}

@Repository
public class StoryDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("SBTemplate")
    JdbcTemplate SBJdbcTemplate;

    public List<StoryDto> getData(String id, String orderBy, String limit)
    {
        String query = "select * from story";

        if(id != "")
            query += " where id = " + id;

        if(orderBy != "")
            query += " order by " + orderBy;

        if(limit != "")
            query += " limit " + limit;

        return DPJdbcTemplate.query(query, new StoryRowMapper());
    }

    public List<StoryDto> getDataAll()
    {
        return DPJdbcTemplate.query("select * from story", new StoryRowMapper());
    }

    public String insertToDatabase(Map<String, String> request)
    {
        String query = "insert into story (title, imgURL, name, content, hashTag) values (?, ?, ?, ?, ?)";
        try
        {
            DPJdbcTemplate.update(query, request.get("title"), request.get("imgURL"), request.get("name"), request.get("content"), request.get("hashTag"));
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }
        return "Success Insert";
    }

    public void updateDatabase(Map<String, String> request) {
        String query = String.format("update story set title = '%s', imgURL = '%s', content = '%s' where id = %s",
                                    request.get("title"), request.get("imgURL"), request.get("content"), request.get("id"));
        DPJdbcTemplate.update(query);
    }

    public void deleteStoryDatabase(Map<String,String> request){
        String query1 =String.format("delete from story where id = %s", request.get("id"));
        String query2 = String.format("delete from sub.chat where targetId = %s", request.get("id"));
        DPJdbcTemplate.update(query1);
        SBJdbcTemplate.update(query2);
    }

    public String addViewCount(Map<String, String> request) {
        String query = String.format("update story set viewCount = ? where id = %s", request.get("id"));
        try {
            DPJdbcTemplate.update(query, Integer.parseInt(request.get("viewCount")) + 1);
            return "success";
        }
        catch(DataAccessException e) {
            return "error";
        }
    }
}
