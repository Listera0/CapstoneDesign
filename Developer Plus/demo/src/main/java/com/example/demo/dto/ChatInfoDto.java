package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatInfoDto {

    // 데이터 베이스 구조
    private int id;
    private int projectId;
    private String title;
    private String memberId;
    private String imgURL;
}