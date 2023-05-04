package com.example.demo.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.example.demo.DTO.*;


@Repository
public class TestDAO {
    
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<TestDTO> getDataAll()
    {
        return jdbcTemplate.query("select * from developer", 
			new RowMapper<TestDTO>() 
            {
				public TestDTO mapRow(ResultSet rs, int rowNum) throws SQLException 
                {
					TestDTO dto = new TestDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setName(rs.getString("name"));
                    dto.setJob(rs.getString("job"));
                    dto.setCareer(rs.getString("career"));
                    dto.setRegion(rs.getString("region"));
                    dto.setProjectCount(rs.getInt("projectCount"));

					return dto;
				}
		    }
        );
    }
}
