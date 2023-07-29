package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.*;

class ChatRowMapper implements RowMapper<ChatDto> {
    @Override
    @Nullable
    public ChatDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChatDto dto = new ChatDto();
        dto.setId(rs.getInt("id"));
        dto.setTargetChat(rs.getInt("targetChat"));
        dto.setWriter(rs.getInt("writer"));
        dto.setDate(rs.getString("date"));
	    dto.setComment(rs.getString("date"));

        return dto;
    }
}

@Repository
public class ChatDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("CTTemplate")
    JdbcTemplate CTJdbcTemplate;

    // 채팅 입력 (id, userId, content)
    public void insertChat(Map<String, String> request) {
        String query1 = String.format("insert into chat%s (userId, content, date) values (?, ?, ?)", request.get("id"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");

        CTJdbcTemplate.update(query1, request.get("userId"), request.get("content"), LocalDate.now().format(formatter));
    }

    // 구간을 정해 채팅 10개씩 받아오기 (id)
    public List<ChatDto> getChatHistory(Map<String, String> request) {
        int section = Integer.parseInt(request.get("section"));

        String query1 = String.format("select * from chat%s order by date desc limit %d", request.get("id"), section);

        List<ChatDto> result = CTJdbcTemplate.query(query1, new ChatRowMapper());
        return result;
    }
}





