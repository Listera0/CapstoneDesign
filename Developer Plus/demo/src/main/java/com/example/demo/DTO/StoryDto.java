package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryDto {

    // 데이터 베이스 구조
    private int id;

    private String title;
    private String imgURL;
    private String name;
    private String content;
    private String hashTag;

    private int viewCount;
    private int likeCount;

    @Override
    public String toString()
    {
        return "[" + id + " | " + title + " | " + name + " | " + content + " | " + imgURL + " | " + hashTag + "]";
    }
}
