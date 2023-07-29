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

class ChatAlertRowMapper implements RowMapper<ChatAlertDto> {
    @Override
    @Nullable
    public ChatAlertDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChatAlertDto dto = new ChatAlertDto();
        dto.setId(rs.getInt("id"));
        dto.setTargetChat(rs.getInt("targetChat"));
	    dto.setWriter(rs.getInt("writer"));
	    dto.setDate(rs.getString("date"));
	    dto.setComment(rs.getString("comment"));

        return dto;
    }
}

@Repository
public class ChatAlertDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("CTTemplate")
    JdbcTemplate CTJdbcTemplate;

     public void insertChatAlert(Map<String, String> request) {
        String query1 = String.format("insert into chatAlert(targetChat, writer, date, comment) values(?, ?, ?)");
	    CTJdbcTemplate.update(query1, request.get("targetChat"), request.get("writer"), request.get("date"), request.get("comment"));
    }

    public List<ChatAlertDto> getChatAlert(Map<String, String> request) {
        String query1 = "select * from chatAlert";
	    List<ChatAlertDto> result = CTJdbcTemplate.query(query1, new ChatAlertRowMapper());

	    return result;
    }
}