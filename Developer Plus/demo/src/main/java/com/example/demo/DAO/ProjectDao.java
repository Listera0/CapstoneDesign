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
import com.example.demo.dao.*;

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
        dto.setEmail(rs.getString("email"));
        dto.setJob(rs.getString("job"));
        dto.setJobDetail(rs.getString("jobDetail"));
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

    
    @Autowired
    @Qualifier("CTTemplate")
    JdbcTemplate CTJdbcTemplate;

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



    public void deleteFromDatabase(Map<String, String> request) {
        String query1 = String.format("delete from project where id = %s", request.get("id"));
        String query2 = String.format("delete from chatInfo where projectId = %s", request.get("id"));
        String query3 = String.format("drop table chat.chat%s", request.get("id"));

        DPJdbcTemplate.update(query1);
        CTJdbcTemplate.update(query2);
        CTJdbcTemplate.update(query3);
    }

    public List<ProjectDto> getDataAll()
    {
        return DPJdbcTemplate.query("select * from project", new ProjectRowMapper());
    }
    
    public String insertToDatabase(Map<String, String> request)
    {
        String query = "insert into project (title, imgURL, region, name, email, job, jobDetail,career, nowJob, requireJob, startDate, endDate, content, skill) " +
                                     "values (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?,?)";
        try
        {
            DPJdbcTemplate.update(query,    request.get("title"), request.get("imgURL"), request.get("region"), request.get("name"),request.get("email"), 
                                            request.get("job"),request.get("jobDetail") ,request.get("career"), request.get("nowJob"), request.get("requireJob"), 
                                            request.get("startDate"), request.get("endDate"), request.get("content"), request.get("skill"));
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }

        String query4 = "select * from project order by id desc limit 1";
        List<ProjectDto> tempProject = DPJdbcTemplate.query(query4, new ProjectRowMapper());
        int tempId = tempProject.get(0).getId();

        String query3 = String.format("insert into chatInfo (projectId, title, memberId, imgURL) values (%s, '%s', '%s', '%s')", tempId, request.get("title"), request.get("id"), request.get("imgURL"));
	    CTJdbcTemplate.update(query3);

        String query2 = String.format("create table chat.chat%d (`id` INT NOT NULL AUTO_INCREMENT, `userId` INT NULL,`date` VARCHAR(45) NULL,`comment` VARCHAR(100) NULL,PRIMARY KEY (`id`))", tempId);
        CTJdbcTemplate.update(query2);

        return "Success Insert";
    }

    public String addViewCount(Map<String, String> request) {
        String query = String.format("update project set viewCount = ? where id = %s", request.get("id"));
        try {
            DPJdbcTemplate.update(query, Integer.parseInt(request.get("viewCount")) + 1);
            return "success";
        }
        catch(DataAccessException e) {
            return "error";
        }
    }
    
    public String updateNowJob (Map<String, String> request) {
        String query1 = String.format("select * from project where id = %s", request.get("id"));
        String query2 = String.format("update project set nowJob = ? where id = %s", request.get("id"));

        List<ProjectDto> tempData = DPJdbcTemplate.query(query1, new ProjectRowMapper());

        try {
            DPJdbcTemplate.update(query2, Integer.parseInt(tempData.get(0).getNowJob()) + 1);
            return "success";
        }
        catch(DataAccessException e) {
            return "error";
        }
    }
}