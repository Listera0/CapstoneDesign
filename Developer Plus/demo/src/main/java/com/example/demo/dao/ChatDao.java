package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Collections;

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
        dto.setUserId(rs.getInt("userId"));
        dto.setDate(rs.getString("date"));
	    dto.setComment(rs.getString("comment"));

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
        String query1 = String.format("select * from chatinfo where id = %s", request.get("id"));

        List<ChatInfoDto> temp = CTJdbcTemplate.query(query1, new ChatInfoRowMapper());

        String query2 = String.format("insert into chat%d (userId, date, comment) values (?, ?, ?)", temp.get(0).getProjectId());
        //DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd/HH/MI/SS");

        CTJdbcTemplate.update(query2, request.get("userId"), LocalDateTime.now(), request.get("content"));
    }

    // 구간을 정해 채팅 10개씩 받아오기 (id, section)
    public List<ChatDto> getChatHistory(Map<String, String> request) {
        int section = Integer.parseInt(request.get("section"));

        String query1 = String.format("select * from chatinfo where id = %s", request.get("id"));

        List<ChatInfoDto> temp = CTJdbcTemplate.query(query1, new ChatInfoRowMapper());

        String query2 = String.format("select * from chat%d order by date desc limit %d", temp.get(0).getProjectId(), section);

        List<ChatDto> result = CTJdbcTemplate.query(query2, new ChatRowMapper());

        Collections.reverse(result);

        return result;
    }
}





