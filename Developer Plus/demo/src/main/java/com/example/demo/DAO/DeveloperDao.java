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

class DevRowMapper implements RowMapper<DeveloperDto> {
    @Override
    @Nullable
    public DeveloperDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        DeveloperDto dto = new DeveloperDto();
        dto.setId(rs.getInt("id"));
        dto.setName(rs.getString("name"));
        dto.setJob(rs.getString("job"));
        dto.setCareer(rs.getString("career"));
        dto.setRegion(rs.getString("region"));
        dto.setProjectCount(rs.getInt("projectCount"));
        dto.setUrlGithub(rs.getString("urlGithub"));
        dto.setUrlInsta(rs.getString("urlInsta"));
        dto.setIntroduce(rs.getString("introduce"));
        dto.setSkill(rs.getString("skill"));
        dto.setLikeCount(rs.getInt("likeCount"));
        dto.setEmail(rs.getString("email"));
        dto.setPhone(rs.getString("phone"));
        dto.setImgURL(rs.getString("imgURL"));
        dto.setPassword(rs.getString("password"));
        dto.setProvider(rs.getString("provider"));
        dto.setProviderId(rs.getLong("providerId"));

        return dto;
    }
}

@Repository
public class DeveloperDao { 
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    public List<DeveloperDto> getData(String id, String orderBy, String limit)
    {
        String query = "select * from developer";

        if(id != "")
            query += " where id = " + id;

        if(orderBy != "")
            query += " order by " + orderBy;

        if(limit != "")
            query += " limit " + limit;

        return DPJdbcTemplate.query(query, new DevRowMapper());
    }

    public List<DeveloperDto> getDataAll()
    {
        String query = "select * from developer";
        return DPJdbcTemplate.query(query, new DevRowMapper());
    }

    public String insertToDatabase(DeveloperDto dto)
    {
        String query = "insert into developer (id, password, name, job, career, region, projectCount, urlGithub, urlInsta, introduce, skill, likeCount, email, phone, imgURL) " + 
                                        "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try
        {
            DPJdbcTemplate.update(query, dto.getId(), dto.getPassword(), dto.getName(), dto.getJob(), dto.getCareer(), dto.getRegion(), dto.getProjectCount(), dto.getUrlGithub(), 
                                        dto.getUrlInsta(), dto.getIntroduce(), dto.getSkill(), dto.getLikeCount(), dto.getEmail(), dto.getPhone(), dto.getImgURL());
        }
        catch(DataAccessException  e)
        {
            return "Fail";
        }
        return "Success";
    }
}
