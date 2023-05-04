package com.example.demo.DTO;

public class TestDTO {

    // 데이터 베이스 구조
    public int id;
    private String name;
    private String job;
    private String career;
    private String region;
    private int projectCount;

    public int getId() { return id; }
    public void setId(int value) { id = value; }

    public String getName() { return name; }
    public void setName(String value) { name = value; }

    public String getJob() { return job; }
    public void setJob(String value) { job = value; }

    public String getCareer() { return career; }
    public void setCareer(String value) { career = value; }

    public String getRegion() { return region; }
    public void setRegion(String value) { region = value; }

    public int getProjectCount() { return projectCount; }
    public void setProjectCount(int value) { projectCount = value; }

    public void setAllValues(int id, String name, String job, String career, String region, int projectCount)
    {
        this.id = id;
        this.name = name;
        this.job = job;
        this.career = career;
        this.region = region;
        this.projectCount = projectCount;
    }


    @Override
    public String toString()
    {
        return "[" + id + " | " + name + " | " + job + " | " + career + " | " + region + " | " + projectCount + "]";
    }
}
