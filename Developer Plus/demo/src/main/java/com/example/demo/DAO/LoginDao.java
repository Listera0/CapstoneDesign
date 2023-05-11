package com.example.demo.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.DTO.DeveloperDto;

@Repository
public class LoginDao {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<DeveloperDto> hasEmail(String email)
    {
        String query = "select * from developer where email = '" + email + "'";

        return jdbcTemplate.query(query, new DevRowMapper());
    }
}
