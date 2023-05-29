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

class ProjectRowMapper implements RowMapper<ProjectDto> {
    @Override
    @Nullable
    public ProjectDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProjectDto dto = new ProjectDto();
        dto.setId(rs.getInt("id"));
        dto.setTitle(rs.getString("title"));
        dto.setImgURL(rs.getString("imgURL"));
        dto.setRegion(rs.getString("region"));
        dto.setName(rs.getString("name"));
        dto.setJob(rs.getString("job"));
        dto.setCareer(rs.getString("career"));
        dto.setNowJob(rs.getString("nowJob"));
        dto.setRequireJob(rs.getString("requireJob"));
        dto.setStartDate(rs.getString("startDate"));
        dto.setEndDate(rs.getString("endDate"));
        dto.setContent(rs.getString("content"));
        dto.setSkill(rs.getString("skill"));
        dto.setViewCount(rs.getInt("viewCount"));
        dto.setLikeCount(rs.getInt("likeCount"));

        return dto;
    }
}

@Repository
public class ProjectDao {
    
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    public List<ProjectDto> getData(String id, String orderBy, String limit)
    {
        String query = "select * from project";

        if(id != "")
            query += " where id = " + id;

        if(orderBy != "")
            query += " order by " + orderBy;

        if(limit != "")
            query += " limit " + limit;

        return DPJdbcTemplate.query(query, new ProjectRowMapper());
    }

    public List<ProjectDto> getDataAll()
    {
        return DPJdbcTemplate.query("select * from project", new ProjectRowMapper());
    }

    public String insertToDatabase(ProjectDto dto)
    {
        String query = "insert into project (id, title, region, name, content, job, requireJob, nowJob, career, imgURL) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try
        {
            DPJdbcTemplate.update(query, dto.getId(), dto.getTitle(), dto.getRegion(), dto.getName(), dto.getContent(), dto.getJob(),
                                        dto.getRequireJob(), dto.getNowJob(), dto.getCareer(), dto.getImgURL());
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }
        return "Success Insert";
    }
}
