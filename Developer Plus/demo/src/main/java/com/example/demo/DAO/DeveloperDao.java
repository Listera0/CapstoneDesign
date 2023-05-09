package com.example.demo.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.example.demo.DTO.*;


@Repository
public class DeveloperDao {
    
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<DeveloperDto> getData(String id, String orderBy, String limit)
    {
        String query = "select * from developer";

        if(id != "")
            query += " where id = " + id;

        if(orderBy != "")
            query += " order by " + orderBy;

        if(limit != "")
            query += " limit " + limit;

        return jdbcTemplate.query(query, 
			new RowMapper<DeveloperDto>() 
            {
				public DeveloperDto mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					return new DeveloperDto(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("job"),
                        rs.getString("career"),
                        rs.getString("region"),
                        rs.getInt("projectCount"),
                        rs.getString("urlGithub"),
                        rs.getString("urlInsta"),
                        rs.getString("introduce"),
                        rs.getString("skill"),
                        rs.getInt("likeCount"),
                        rs.getString("email"),
                        rs.getString("phone")
                    );
				}
		    }
        );
    }

    public List<DeveloperDto> getDataAll()
    {
        return jdbcTemplate.query("select * from developer", 
			new RowMapper<DeveloperDto>() 
            {
				public DeveloperDto mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					return new DeveloperDto(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("job"),
                        rs.getString("career"),
                        rs.getString("region"),
                        rs.getInt("projectCount"),
                        rs.getString("urlGithub"),
                        rs.getString("urlInsta"),
                        rs.getString("introduce"),
                        rs.getString("skill"),
                        rs.getInt("likeCount"),
                        rs.getString("email"),
                        rs.getString("phone")
                    );
				}
		    }
        );
    }

    public String insertToDatabase(DeveloperDto dto)
    {
        String query = "insert into developer (id, name, job, career, region, projectCount, urlGithub, urlInsta, introduce, skill, likeCount, email, phone) " + 
                                        "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try
        {
            jdbcTemplate.update(query, dto.getId(), dto.getName(), dto.getJob(), dto.getCareer(), dto.getRegion(), dto.getProjectCount(),
                                        dto.getUrlGithub(), dto.getUrlInsta(), dto.getIntroduce(), dto.getSkill(), dto.getLikeCount(), dto.getEmail(), dto.getPhone());
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }
        return "Success Insert";
    }
}
