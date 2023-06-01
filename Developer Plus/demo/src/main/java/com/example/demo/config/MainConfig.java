package com.example.demo.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
 
import javax.sql.DataSource;
 
@Configuration
public class MainConfig {
 
    @Bean(name = "DP")
    @ConfigurationProperties(prefix = "spring.datasource.developerplus")
    public DataSource DPDatasource(){
        return DataSourceBuilder.create().build();
    }
 
    @Bean(name = "DPTemplate")
    public JdbcTemplate DPJdbcTemplate(@Qualifier("DP") DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }

    @Bean(name = "LK")
    @ConfigurationProperties(prefix = "spring.datasource.likecount")
    public DataSource LKDatasource(){
        return DataSourceBuilder.create().build();
    }
 
    @Bean(name = "LKTemplate")
    public JdbcTemplate LKJdbcTemplate(@Qualifier("LK") DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }

    @Bean(name = "CH")
    @ConfigurationProperties(prefix = "spring.datasource.chat")
    public DataSource CHDatasource(){
        return DataSourceBuilder.create().build();
    }
 
    @Bean(name = "CHTemplate")
    public JdbcTemplate CHJdbcTemplate(@Qualifier("CH") DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }
}