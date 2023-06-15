package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.*;

@Repository
public class SearchDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    public List<DeveloperDto> searchDevData(Map<String, String> request)
    {
        String query = String.format("select from developer where name like '%%s%'",request.get("key"));
        return DPJdbcTemplate.query(query, new DevRowMapper());
    }

    public List<ProjectDto> searchProjectData(Map<String, String> request)
    {
        String query = String.format("select * from project where title like '%%s%'",request.get("key"));
        return DPJdbcTemplate.query(query, new ProjectRowMapper());
    }

    public List<StoryDto> searchStoryData(Map<String, String> request)
    {
        String query = String.format("select * from story where title like '%%s%'",request.get("key"));
        return DPJdbcTemplate.query(query, new StoryRowMapper());
    }
}