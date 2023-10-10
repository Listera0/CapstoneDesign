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

class ChatInfoRowMapper implements RowMapper<ChatInfoDto> {
    @Override
    @Nullable
    public ChatInfoDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChatInfoDto dto = new ChatInfoDto();
        dto.setId(rs.getInt("id"));
        dto.setProjectId(rs.getInt("projectId"));
        dto.setTitle(rs.getString("title"));
	    dto.setMemberId(rs.getString("memberId"));
        dto.setImgURL(rs.getString("imgURL"));

        return dto;
    }
}

@Repository
public class ChatInfoDao {
    @Autowired
    @Qualifier("DPTemplate")
    JdbcTemplate DPJdbcTemplate;

    @Autowired
    @Qualifier("CTTemplate")
    JdbcTemplate CTJdbcTemplate;

    public void createChat(Map<String, String> request) {
        String query4 = "select * from project order by id desc limit 1";
        List<ProjectDto> tempProject = DPJdbcTemplate.query(query4, new ProjectRowMapper());
        int tempId = tempProject.get(0).getId();

        String query3 = String.format("insert into chatInfo (projectId, title, memberId, imgURL) values (%s, '%s', '%s', '%s')", tempId, request.get("title"), request.get("id"), request.get("imgURL"));
	    CTJdbcTemplate.update(query3);

        String query1 = "select * from chatInfo order by id desc limit 1";
        List<ChatInfoDto> tempChatInfo = CTJdbcTemplate.query(query1, new ChatInfoRowMapper());
        int nextId = tempChatInfo.get(0).getId();

        String query2 = String.format("create table chat.chat%d (`id` INT NOT NULL AUTO_INCREMENT, `userId` INT NULL,`date` VARCHAR(45) NULL,`comment` VARCHAR(100) NULL,PRIMARY KEY (`id`))", nextId);
        CTJdbcTemplate.update(query2);
    }

    public void  addMemberToChat(Map<String, String> request) {
        String query1 = "select * from chatInfo";
        List<ChatInfoDto> result = CTJdbcTemplate.query(query1, new ChatInfoRowMapper());

        int targetIndex = 0;
        int targetId = 0;

        for(int i = 0; i < result.size(); i++) {
            if(result.get(i).getProjectId() == Integer.parseInt(request.get("projectId"))) {
                targetIndex = i;
                targetId = result.get(i).getId();
                break;
            }
        }
	    String member = result.get(targetIndex).getMemberId() + "," + request.get("memberId");
        System.out.println(member);
        System.out.println(targetId);

        String query2 = String.format("update chatInfo set memberId = '%s' where id = %s", member, targetId);
	    CTJdbcTemplate.update(query2);
        System.out.println("added member");
    }

    public List<ChatInfoDto> getChatInfo(Map<String, String> request) {
        String query1 = "select * from chatInfo";

        if(request.get("id") != "") {
            query1 += " where id = " + request.get("id");
        }

        query1 += " order by id desc";

        if(request.get("limit") != "") {
            query1 += " limit " + request.get("limit");
        }

	    List<ChatInfoDto> result = CTJdbcTemplate.query(query1, new ChatInfoRowMapper());

	    return result;
    }
}
