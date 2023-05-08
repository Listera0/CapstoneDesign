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
public class StoryDao {
    
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<StoryDto> getData(String id, String orderBy, String limit)
    {
        String query = "select * from story";

        if(id != "")
            query += " where id = " + id;

        if(orderBy != "")
            query += " order by " + orderBy;

        if(limit != "")
            query += " limit " + limit;

        return jdbcTemplate.query(query, 
			new RowMapper<StoryDto>() 
            {
				public StoryDto mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					return new StoryDto(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("name"),
                        rs.getString("content"),
                        rs.getString("imgURL"),
                        rs.getString("hashTag")
                    );
				}
		    }
        );
    }

    public List<StoryDto> getDataAll()
    {
        return jdbcTemplate.query("select * from project", 
			new RowMapper<StoryDto>() 
            {
				public StoryDto mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					return new StoryDto(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("name"),
                        rs.getString("content"),
                        rs.getString("imgURL"),
                        rs.getString("hashTag")
                    );
				}
		    }
        );
    }

    public String insertToDatabase(StoryDto dto)
    {
        String query = "insert into story (id, title, name, content, imgURL, hashTag) values (?, ?, ?, ?, ?, ?)";
        try
        {
            jdbcTemplate.update(query, dto.getId(), dto.getTitle(), dto.getName(), dto.getContent(), dto.getImgURL(), dto.getHashTag());
        }
        catch(DataAccessException  e)
        {
            return "Failed Insert";
        }
        return "Success Insert";
    }
}
