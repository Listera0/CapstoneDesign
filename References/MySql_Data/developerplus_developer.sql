-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: developerplus
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `developer`
--

DROP TABLE IF EXISTS `developer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `developer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(20) NOT NULL,
  `job` varchar(20) DEFAULT '미입력',
  `jobDetail` varchar(45) DEFAULT '미입력',
  `career` varchar(20) DEFAULT '미입력',
  `region` varchar(20) DEFAULT '미입력',
  `skill` varchar(45) DEFAULT '미입력',
  `introduce` varchar(415) DEFAULT '미입력',
  `urlGithub` varchar(100) DEFAULT NULL,
  `urlInsta` varchar(100) DEFAULT NULL,
  `imgURL` varchar(500) DEFAULT '/default.png',
  `phone` varchar(45) DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  `providerId` bigint DEFAULT NULL,
  `projectCount` int DEFAULT '0',
  `likeCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `developer`
--

LOCK TABLES `developer` WRITE;
/*!40000 ALTER TABLE `developer` DISABLE KEYS */;
INSERT INTO `developer` VALUES (1,'qkaxhf8823@naver.com','1234','박아지','디자인','UX/UI디자인','중수','서울','rust','# 박용호 | 꾸준히 발전하는 개발자\n## <br>\n## **?‍?Front-End Developer ?**\n* **안녕하세요. 꾸준히 발전하는 프론트엔드 개발자를 꿈꾸는 박용호입니다.**\n* **저는 무엇이던 관심이 생기면 바로 실행합니다.**\n* **단 한줄의 코드라도 서비스의 가치를 담으려고 노력합니다.**\n* **한번 시작한 일은 끝내야하는 버릇탓에 엉덩이가 무겁다는 말을 많이 듣습니다.**\n\n## ?Project\n**2023-03 ~ 2023-06  DeveloperPlus 프론트 부분 개발**\n\n## ? Education\n<hr>\n2019-03 ~ ing  서일대학교 소프트웨어공학과\n\n## ✨  Cartification\n<hr>\n\n**운전면허증✨✨**','ww','ww','/0.jpg','111-1111-1111',NULL,NULL,0,2),(2,'aa@naver.com','1234','임영훈','기획','게임기획','중수','서울','C#,ruby','나다 임영훈','https://github.com/ParkYongHo1','https://www.instagram.com/pxxk._.h0/','/1.jpg','111-1111-1111',NULL,NULL,0,1),(3,'bb@naver.com','1234','나윤재','프론트엔드개발','서버','초보','인천','react','나다 나윤재','https://github.com/ParkYongHo1','https://www.instagram.com/pxxk._.h0/','/2.jpg','010-1234-5678',NULL,NULL,1,1),(4,'cc@naver.com','1234','우주은','프론트엔드개발','IOS','초보','경기','react','나다 우주은','https://github.com/ParkYongHo1','https://www.instagram.com/pxxk._.h0/','/3.jpg','010-9876-5462',NULL,NULL,1,2),(5,'dd@naver.com','1234','김감자','디자인','3D디자인','초보',NULL,NULL,NULL,NULL,NULL,'/4.jpg',NULL,NULL,NULL,0,0),(6,'zz@naver.com','1234','홍길동','미입력','미입력','미입력','미입력','미입력','미입력',NULL,NULL,'/default.png',NULL,NULL,NULL,0,0),(7,'qkaxhf1287@naver.com','1234','박용호','미입력','미입력','미입력','미입력','미입력','미입력',NULL,NULL,'/default.png',NULL,'Kakao',2806610068,0,0);
/*!40000 ALTER TABLE `developer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-10 10:00:46
