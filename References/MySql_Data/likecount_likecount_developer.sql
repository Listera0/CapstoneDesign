-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: likecount
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
-- Table structure for table `likecount_developer`
--

DROP TABLE IF EXISTS `likecount_developer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likecount_developer` (
  `index` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `targetId` int NOT NULL,
  `isLike` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`index`),
  KEY `likecount_developer_ibfk_1_idx` (`userId`),
  KEY `likecount_developer_ibfk_1_idx1` (`targetId`),
  CONSTRAINT `likecount_developer_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `developerplus`.`developer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likecount_developer_ibfk_2` FOREIGN KEY (`targetId`) REFERENCES `developerplus`.`developer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likecount_developer`
--

LOCK TABLES `likecount_developer` WRITE;
/*!40000 ALTER TABLE `likecount_developer` DISABLE KEYS */;
INSERT INTO `likecount_developer` VALUES (16,1,1,1),(17,1,2,0),(18,1,3,0),(19,2,1,1);
/*!40000 ALTER TABLE `likecount_developer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-10 10:00:49
