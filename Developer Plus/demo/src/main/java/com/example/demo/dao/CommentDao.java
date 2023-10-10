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

class CommentRowMapper implements RowMapper<CommentDto> {
    @Override
    @Nullable
    public CommentDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        CommentDto dto = new CommentDto();
        dto.setId(rs.getInt("id"));
        dto.setUserId(rs.getInt("userId"));
        dto.setTargetId(rs.getInt("targetId"));
        dto.setContent(rs.getString("content"));
        dto.setDate(rs.getString("date"));

        return dto;
    }
}

@Repository
public class CommentDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("SBTemplate")
    JdbcTemplate SBJdbcTemplate;

    public List<CommentDto> getChatHistory(String targetId) {
        String query1 = String.format("select * from chat where targetId=%s", targetId);

        List<CommentDto> result = SBJdbcTemplate.query(query1, new CommentRowMapper());
        return result;
    }

    public void insertChat(Map<String, String> request) {
        String query1 = "insert into chat (userId, targetId, content, date) values (?, ?, ?, ?)";
        String query2 = String.format("update story set chatCount=? where id=%s", request.get("targetId"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");

        DPJdbcTemplate.update(query2, Integer.parseInt( request.get("chatCount")) + 1);
        SBJdbcTemplate.update(query1, request.get("userId"), request.get("targetId"), request.get("content"), LocalDate.now().format(formatter));
    }

    public void deleteChat(Map<String, String> request) {
        String query1 = String.format("delete from chat where id='%s'", request.get("id"));
        String query2 = String.format("update story set chatCount=? where id=%s", request.get("targetId"));

        DPJdbcTemplate.update(query2, Integer.parseInt( request.get("chatCount")) - 1);
        SBJdbcTemplate.update(query1);
    }
}
