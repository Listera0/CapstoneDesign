package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class AlertDto {

    // 데이터 베이스 구조
    private int id;
    private int reciver;
    private int sender;
    private String type;
    private String sub1;
    private String comment;

    @Override
    public String toString()
    {
        return "";
    }
}
