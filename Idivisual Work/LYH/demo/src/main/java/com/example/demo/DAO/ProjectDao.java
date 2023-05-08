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
public class ProjectDao {
    
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<ProjectDto> getData(String id, String orderBy, String limit)
    {
        String query = "select * from project";

        if(id != "")
            query += " where id = " + id;

        if(orderBy != "")
            query += " order by " + orderBy;

        if(limit != "")
            query += " limit " + limit;

        return jdbcTemplate.query(query, 
			new RowMapper<ProjectDto>() 
            {
				public ProjectDto mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					return new ProjectDto(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("region"),
                        rs.getString("name"),
                        rs.getString("content"),
                        rs.getString("job"),
                        rs.getInt("requireJob"),
                        rs.getInt("nowJob"),
                        rs.getString("career"),
                        rs.getString("imgURL"),
                        rs.getString("hashTag")
                    );
				}
		    }
        );
    }

    public List<ProjectDto> getDataAll()
    {
        return jdbcTemplate.query("select * from project", 
			new RowMapper<ProjectDto>() 
            {
				public ProjectDto mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					return new ProjectDto(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("region"),
                        rs.getString("name"),
                        rs.getString("content"),
                        rs.getString("job"),
                        rs.getInt("requireJob"),
                        rs.getInt("nowJob"),
                        rs.getString("career"),
                        rs.getString("imgURL"),
                        rs.getString("hashTag")
                    );
				}
		    }
        );
    }

    public String insertToDatabase(ProjectDto dto)
    {
        String query = "insert into project (id, title, region, name, content, job, requireJob, nowJob, career, imgURL, hashTag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try
        {
            jdbcTemplate.update(query, dto.getId(), dto.getTitle(), dto.getRegion(), dto.getName(), dto.getContent(), dto.getJob(),
                                        dto.getRequireJob(), dto.getNowJob(), dto.getCareer(), dto.getImgURL(), dto.getHashTag());
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }
        return "Success Insert";
    }
}
