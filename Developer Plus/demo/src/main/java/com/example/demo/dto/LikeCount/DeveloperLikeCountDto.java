package com.example.demo.dto.LikeCount;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class DeveloperLikeCountDto {

    // 데이터 베이스 구조
    private int index;
    private int userId;
    private int developerId;
    private boolean isLike;

    @Override
    public String toString()
    {
        return (userId + " -> " + developerId + " : " + Boolean.toString(isLike));
    }
}
