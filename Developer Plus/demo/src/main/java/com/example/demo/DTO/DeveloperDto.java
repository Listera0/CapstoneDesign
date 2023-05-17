package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class DeveloperDto {

    // 데이터 베이스 구조
    private int id;
    private String password;
    private String name;
    private String job;
    private String career;
    private String region;
    private int projectCount;
    private String urlGithub;
    private String urlInsta;
    private String introduce;
    private String skill;
    private int likeCount;
    private String email;
    private String phone;
    private String imgURL;

    @Override
    public String toString()
    {
        return id + " | " + name + " | " + job + " | " + career + " | " + region + " | " + projectCount + " | " + urlGithub + " | " + password + "|" + 
                    urlInsta + " | " + introduce + " | " + skill + " | " + likeCount + " | " + email + " | " + phone  + " | " + imgURL;
    }
}
