package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


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

        return dto;
    }
}

@Repository
public class StoryDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

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

    public String insertToDatabase(StoryDto dto)
    {
        String query = "insert into story (id, title, name, content, imgURL, hashTag) values (?, ?, ?, ?, ?, ?)";
        try
        {
            DPJdbcTemplate.update(query, dto.getId(), dto.getTitle(), dto.getName(), dto.getContent(), dto.getImgURL(), dto.getHashTag());
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }
        return "Success Insert";
    }
}
