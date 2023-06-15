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
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `story` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `imgURL` varchar(45) DEFAULT NULL,
  `name` varchar(20) NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  `hashTag` varchar(45) DEFAULT NULL,
  `viewCount` int DEFAULT '0',
  `likeCount` int DEFAULT '0',
  `chatCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (1,'렛플 마지막 퍼즐, 대놓고 퀘스트 업데이트!!!!!','/c1.jpg','박용호','ㅋㅌㅊ','ㅁㄴㅇ',31,0,1),(2,'FrontEnd 노션 연동 기술 공유합니다!','/c2.png','임영훈','내용','해시태그',8,0,0),(3,'렛플-공식채널','/c2.png','나윤재',NULL,NULL,1,0,0),(4,'123','/c2.png','우주은','스토리는 별도의 가이드라인없이 작성해주시면 됩니다.','ㅂㅈㄷ',1,0,0),(5,'213213','/c2.png','나윤재','스토리는 별도의 가이드라인없이 작성해주시면 됩니다.','213',1,0,0),(6,'213','/c2.png','나윤재','# 스토리는 별도의 가이드라인없이 작성해주시면 됩니다.','123',0,0,0),(7,'123','/c2.png','나윤재','스토리는 별도의 가이드라인없이 작성해주시면 됩니다.','32',0,0,0),(8,'123123','/c1.jpg','경기','나윤재','',0,0,0),(9,'123','/main2.jpg','경기','나윤재','',1,0,0);
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
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
