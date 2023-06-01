package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatDto {

    // 데이터 베이스 구조
    private int index;
    private int userId;
    private int targetId;
    private String content;
    private String date;

    @Override
    public String toString()
    {
        return (userId + " -> " + targetId + " : " + content);
    }
}
