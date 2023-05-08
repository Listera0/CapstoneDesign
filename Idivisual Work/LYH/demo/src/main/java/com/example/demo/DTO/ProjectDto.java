package com.example.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDto {

    // 데이터 베이스 구조
    private int id;
    private String title;
    private String region;
    private String name;
    private String content;
    private String job;
    private int requireJob;
    private int nowJob;
    private String career;
    private String imgURL;
    private String hashTag;

    @Override
    public String toString()
    {
        return "[" + id + " | " + title + " | " + region + " | " + name + " | " + content + " | " + job + " | "
         + requireJob + " | " + nowJob + " | " + career + " | " + imgURL + " | " + hashTag + "]";
    }
}
