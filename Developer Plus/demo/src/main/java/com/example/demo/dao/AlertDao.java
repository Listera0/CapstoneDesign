package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.*;

class AlertRowMapper implements RowMapper<AlertDto> {
    @Override
    @Nullable
    public AlertDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        AlertDto dto = new AlertDto();
        dto.setId(rs.getInt("id"));
        dto.setReciver(rs.getInt("reciver"));
        dto.setSender(rs.getInt("sender"));
        dto.setType(rs.getString("type"));
        dto.setSub1(rs.getString("sub1"));
        dto.setComment(rs.getString("comment"));

        return dto;
    }
}

@Repository
public class AlertDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("SBTemplate")
    JdbcTemplate SBJdbcTemplate;

    public List<AlertDto> getAlert (Map<String, String> request) {
        String query = String.format("select * from alert where reciver=%s", request.get("reciver"));

        return SBJdbcTemplate.query(query, new AlertRowMapper());
    }

    public void setAlert (Map<String, String> request) {
        String query1 = String.format("select * from developer where email='%s'", request.get("reciver"));
        String query2 = "insert into alert (reciver, sender, type,sub1, comment) values (?, ?, ?, ?,?)";

        List<DeveloperDto> Temp = DPJdbcTemplate.query(query1, new DevRowMapper());

        SBJdbcTemplate.update(query2,    Temp.get(0).getId(), request.get("sender"), request.get("type"),
                                        request.get("sub1"), request.get("comment"));
    }

    public void removeAlert (Map<String, String> request) {
        String query = String.format("delete from alert where id='%s'", request.get("id"));

        SBJdbcTemplate.update(query);
    }
}
