package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikeCountDto {

    // 데이터 베이스 구조
    private int index;
    private int userId;
    private int targetId;
    private boolean isLike;

    @Override
    public String toString()
    {
        return (userId + " -> " + targetId + " : " + Boolean.toString(isLike));
    }
}