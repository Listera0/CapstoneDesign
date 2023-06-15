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
  `introduce` varchar(45) DEFAULT '미입력',
  `urlGithub` varchar(100) DEFAULT NULL,
  `urlInsta` varchar(100) DEFAULT NULL,
  `imgURL` varchar(500) DEFAULT '/default.png',
  `phone` varchar(45) DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  `providerId` bigint DEFAULT NULL,
  `projectCount` int DEFAULT '0',
  `likeCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `developer`
--

LOCK TABLES `developer` WRITE;
/*!40000 ALTER TABLE `developer` DISABLE KEYS */;
INSERT INTO `developer` VALUES (1,'qkaxhf8823@naver.com','1234','박용호','디자인','','중수','','go,vue,nuxt','','','','/9people.png','422-4234-3433',NULL,NULL,0,0),(2,'aa@naver.com','1234','임영훈','','','','','','','','','/4people.png','',NULL,NULL,0,2),(3,'bb@naver.com','1234','나윤재','프론트엔드','서버','초보','서울','react','안녕하세요','https://...','https://...','/2.jpg','010-1234-5678',NULL,NULL,1,0),(4,'cc@gamil.com','1234','우주은','프론트엔드','벡엔드','초보','서울','react','안녕하세요','https://...','https://...','/3.jpg','010-9876-5462',NULL,NULL,1,0),(5,'ee@naver.com','1234','김감자','프론트','벡엔드','초보',NULL,NULL,NULL,NULL,NULL,'/4.jpg',NULL,NULL,NULL,0,3),(11,'ww@naver.com','1234','전준호','미입력','미입력','미입력','미입력','미입력','미입력',NULL,NULL,'/default.png',NULL,NULL,NULL,0,0),(12,'bibimbap_no@naver.com','123123123a!','','미입력','미입력','미입력','미입력','미입력','미입력',NULL,NULL,'/default.png',NULL,NULL,NULL,0,0),(13,'asdf123@naver.com','1234','박영호','미입력','미입력','미입력','미입력','미입력','미입력',NULL,NULL,'/default.png',NULL,NULL,NULL,0,0),(14,'zz@naver.com','1234','나윤성','미입력','미입력','미입력','미입력','미입력','미입력',NULL,NULL,'/default.png',NULL,NULL,NULL,0,0);
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

-- Dump completed on 2023-06-15 14:53:31
