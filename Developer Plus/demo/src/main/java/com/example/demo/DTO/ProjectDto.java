package com.example.demo.dto;

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
    private String imgURL;
    private String region;
    private String name;

    // 프론트 엔드 [초보] 1 / 10
    private String job;
    private String jobDetail;
    private String career;
    private String nowJob;
    private String requireJob;

    private String startDate;
    private String endDate;

    private String content;

    private String skill;

    private int viewCount;
    private int likeCount;

    @Override
    public String toString()
    {
        return "[" + id + " | " + title + " | " + region + " | " + name + " | " + content + " | " + job + " | "
         + requireJob + " | " + nowJob + " | " + career + " | " + imgURL + " | " + "]";
    }
}
