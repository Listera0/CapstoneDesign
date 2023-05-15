package com.example.demo.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
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

    public String insertToDatabase(int id, String name, String email, String password)
    {
        String query = "insert into developer (id, name, email, password) " + 
                                        "values (?, ?, ?, ?)";
        try
        {
            jdbcTemplate.update(query, id, name, email, password);
        }
        catch(DataAccessException  e)
        {
            return "Fail";
        }
        return "Success";
    }
}
