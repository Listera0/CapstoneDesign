package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("running");
	}
}

// cd .\src\main\frontend\
// npm start
// cp -r "C:\Users\82108\Desktop\Capstone\CapstoneDesign\Developer Plus\demo\src\main\frontend\build\*" "C:\Users\82108\Desktop\Capstone\CapstoneDesign\Developer Plus\demo\src\main\resources\static\"

//./mvnw spring-boot:run