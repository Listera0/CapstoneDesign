package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

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
        dto.setIndex(rs.getInt("index"));
        dto.setUserId(rs.getInt("userId"));
        dto.setTargetId(rs.getInt("targetId"));
        dto.setContent(rs.getString("content"));
        dto.setDate(rs.getString("date"));

        return dto;
    }
}

@Repository
public class ChatDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("CHTemplate")
    JdbcTemplate CHJdbcTemplate;

    public List<ChatDto> getChatHistory(String targetId) {
        String query1 = String.format("select * from chat where targetId=%s", targetId);

        List<ChatDto> result = CHJdbcTemplate.query(query1, new ChatRowMapper());
        return result;
    }

    public void insertChat(String userId, String targetId, String content) {
        String query1 = "insert into chat (userId, targetId, content, date) values (?, ?, ?, ?)";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");

        CHJdbcTemplate.update(query1, userId, targetId, content, LocalDate.now().format(formatter));
    }

    public void deleteChat(String index) {
        String query = String.format("delete from chat where index=%s", index);

        CHJdbcTemplate.update(query);
    }
}
