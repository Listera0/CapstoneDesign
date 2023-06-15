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
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `imgURL` varchar(45) DEFAULT NULL,
  `region` varchar(20) DEFAULT NULL,
  `name` varchar(20) NOT NULL,
  `skill` varchar(45) DEFAULT NULL,
  `job` varchar(50) DEFAULT NULL,
  `jobDetail` varchar(45) DEFAULT NULL,
  `career` varchar(60) DEFAULT NULL,
  `nowJob` varchar(20) DEFAULT NULL,
  `requireJob` varchar(20) DEFAULT NULL,
  `startDate` varchar(45) DEFAULT NULL,
  `endDate` varchar(45) DEFAULT NULL,
  `content` varchar(1500) DEFAULT NULL,
  `viewCount` int DEFAULT '0',
  `likeCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (65,'ㅂㄱㅈㄷ','/c1.jpg','경남','임영훈','rust','기획','게임기획','중수','0','2',NULL,NULL,'# 1.프로젝트 시작동기\n\n-왜 이 서비스를 만들고싶은 이유를 적어주세요.\n (ex 국내여행을 가려고 하는데 어떤곳이 좋은지에 대한 경험이 없어서 어려웠습니다.\n 국내도 해외만큼이나 다양한 지역의 명소가 있는데, 이것이 잘 정리되어있지 않아 잊어버리기 일쑤입니다.\n 전국적인 행사정보와 국내 유명여행지를 모아보여준다면, 사람들이 많이 사용할 것 같습니다) \n\n-만들고자 하는 서비스에 대해 알려주세요\n(ex 계절별/축제별 국내여행을 모아서 추천해주는 서비스를 만들고자합니다. \n꽃이 피는 시기를 기준으로 , 꽃구경을 갈 수 있는 장소를, 월별로 축제가 있는 지역을 추천합니다. \n추천시에는 블로그 리뷰 등을 묶어서 해당 부분을 참고할 수 있게 하고 , 이메일이나 앱 푸시등으로 사용자에게 주기적으로 안내합니다.) \n\n-어떤 사용자들을 타겟하고 있는지 적어주세요\n(ex 주말에 평범한 데이트가 아닌 특별한 데이트를 찾거나, 미취학아동들과 같이 갈수있는 체험형 코스를 찾는 사용자를 대상으로 합니다.) \n\n# 2\\. 회의 진행/ 모임 방식\n\n-1주에 몇번정도 회의나 모임을 진행할 계획인가요?\n(ex - 1주일에 1회/2회 정도 정기적으로 회의합니다)\n\n-온/오프라인 회의 진행시 진행방식을 적어주세요\n(ex - 온라인은 줌을 활용하고, 오프라인은 강남역 카페등을 대관할예정입니다, 커뮤니케이션은 슬랙을 위주로 사용합니다 )\n\n# 3\\. 그외 자유기재\n\n(ex 대학생분들만 지원해주시면 감사하겠습니다.)',4,0),(66,'12312312','/c1.jpg','전남','박용호','C++,java,assembly,php','기획','게임기획','초보','0','2',NULL,NULL,'# 1.프로젝트 시작동기\n\n-왜 이 서비스를 만들고싶은 이유를 적어주세요.\n (ex 국내여행을 가려고 하는데 어떤곳이 좋은지에 대한 경험이 없어서 어려웠습니다.\n 국내도 해외만큼이나 다양한 지역의 명소가 있는데, 이것이 잘 정리되어있지 않아 잊어버리기 일쑤입니다.\n 전국적인 행사정보와 국내 유명여행지를 모아보여준다면, 사람들이 많이 사용할 것 같습니다) \n\n-만들고자 하는 서비스에 대해 알려주세요\n(ex 계절별/축제별 국내여행을 모아서 추천해주는 서비스를 만들고자합니다. \n꽃이 피는 시기를 기준으로 , 꽃구경을 갈 수 있는 장소를, 월별로 축제가 있는 지역을 추천합니다. \n추천시에는 블로그 리뷰 등을 묶어서 해당 부분을 참고할 수 있게 하고 , 이메일이나 앱 푸시등으로 사용자에게 주기적으로 안내합니다.) \n\n-어떤 사용자들을 타겟하고 있는지 적어주세요\n(ex 주말에 평범한 데이트가 아닌 특별한 데이트를 찾거나, 미취학아동들과 같이 갈수있는 체험형 코스를 찾는 사용자를 대상으로 합니다.) \n\n# 2\\. 회의 진행/ 모임 방식\n\n-1주에 몇번정도 회의나 모임을 진행할 계획인가요?\n(ex - 1주일에 1회/2회 정도 정기적으로 회의합니다)\n\n-온/오프라인 회의 진행시 진행방식을 적어주세요\n(ex - 온라인은 줌을 활용하고, 오프라인은 강남역 카페등을 대관할예정입니다, 커뮤니케이션은 슬랙을 위주로 사용합니다 )\n\n# 3\\. 그외 자유기재\n\n(ex 대학생분들만 지원해주시면 감사하겠습니다.)',3,0),(67,'312','/c1.jpg','','박용호','','','','','0','0',NULL,NULL,'# 1.프로젝트 시작동기\n\n-왜 이 서비스를 만들고싶은 이유를 적어주세요.\n (ex 국내여행을 가려고 하는데 어떤곳이 좋은지에 대한 경험이 없어서 어려웠습니다.\n 국내도 해외만큼이나 다양한 지역의 명소가 있는데, 이것이 잘 정리되어있지 않아 잊어버리기 일쑤입니다.\n 전국적인 행사정보와 국내 유명여행지를 모아보여준다면, 사람들이 많이 사용할 것 같습니다) \n\n-만들고자 하는 서비스에 대해 알려주세요\n(ex 계절별/축제별 국내여행을 모아서 추천해주는 서비스를 만들고자합니다. \n꽃이 피는 시기를 기준으로 , 꽃구경을 갈 수 있는 장소를, 월별로 축제가 있는 지역을 추천합니다. \n추천시에는 블로그 리뷰 등을 묶어서 해당 부분을 참고할 수 있게 하고 , 이메일이나 앱 푸시등으로 사용자에게 주기적으로 안내합니다.) \n\n-어떤 사용자들을 타겟하고 있는지 적어주세요\n(ex 주말에 평범한 데이트가 아닌 특별한 데이트를 찾거나, 미취학아동들과 같이 갈수있는 체험형 코스를 찾는 사용자를 대상으로 합니다.) \n\n# 2\\. 회의 진행/ 모임 방식\n\n-1주에 몇번정도 회의나 모임을 진행할 계획인가요?\n(ex - 1주일에 1회/2회 정도 정기적으로 회의합니다)\n\n-온/오프라인 회의 진행시 진행방식을 적어주세요\n(ex - 온라인은 줌을 활용하고, 오프라인은 강남역 카페등을 대관할예정입니다, 커뮤니케이션은 슬랙을 위주로 사용합니다 )\n\n# 3\\. 그외 자유기재\n\n(ex 대학생분들만 지원해주시면 감사하겠습니다.)',1,0),(68,'321','/c1.jpg','충남','박용호','','','','','0','0','2023-06-19T15:00:00.000Z','2023-06-27T15:00:00.000Z','# 1.프로젝트 시작동기\n\n-왜 이 서비스를 만들고싶은 이유를 적어주세요.\n (ex 국내여행을 가려고 하는데 어떤곳이 좋은지에 대한 경험이 없어서 어려웠습니다.\n 국내도 해외만큼이나 다양한 지역의 명소가 있는데, 이것이 잘 정리되어있지 않아 잊어버리기 일쑤입니다.\n 전국적인 행사정보와 국내 유명여행지를 모아보여준다면, 사람들이 많이 사용할 것 같습니다) \n\n-만들고자 하는 서비스에 대해 알려주세요\n(ex 계절별/축제별 국내여행을 모아서 추천해주는 서비스를 만들고자합니다. \n꽃이 피는 시기를 기준으로 , 꽃구경을 갈 수 있는 장소를, 월별로 축제가 있는 지역을 추천합니다. \n추천시에는 블로그 리뷰 등을 묶어서 해당 부분을 참고할 수 있게 하고 , 이메일이나 앱 푸시등으로 사용자에게 주기적으로 안내합니다.) \n\n-어떤 사용자들을 타겟하고 있는지 적어주세요\n(ex 주말에 평범한 데이트가 아닌 특별한 데이트를 찾거나, 미취학아동들과 같이 갈수있는 체험형 코스를 찾는 사용자를 대상으로 합니다.) \n\n# 2\\. 회의 진행/ 모임 방식\n\n-1주에 몇번정도 회의나 모임을 진행할 계획인가요?\n(ex - 1주일에 1회/2회 정도 정기적으로 회의합니다)\n\n-온/오프라인 회의 진행시 진행방식을 적어주세요\n(ex - 온라인은 줌을 활용하고, 오프라인은 강남역 카페등을 대관할예정입니다, 커뮤니케이션은 슬랙을 위주로 사용합니다 )\n\n# 3\\. 그외 자유기재\n\n(ex 대학생분들만 지원해주시면 감사하겠습니다.)',1,0),(69,'12313','/c1.jpg','','박용호','python,java','','','','0','0',NULL,NULL,'# 1.프로젝트 시작동기\n\n-왜 이 서비스를 만들고싶은 이유를 적어주세요.\n (ex 국내여행을 가려고 하는데 어떤곳이 좋은지에 대한 경험이 없어서 어려웠습니다.\n 국내도 해외만큼이나 다양한 지역의 명소가 있는데, 이것이 잘 정리되어있지 않아 잊어버리기 일쑤입니다.\n 전국적인 행사정보와 국내 유명여행지를 모아보여준다면, 사람들이 많이 사용할 것 같습니다) \n\n-만들고자 하는 서비스에 대해 알려주세요\n(ex 계절별/축제별 국내여행을 모아서 추천해주는 서비스를 만들고자합니다. \n꽃이 피는 시기를 기준으로 , 꽃구경을 갈 수 있는 장소를, 월별로 축제가 있는 지역을 추천합니다. \n추천시에는 블로그 리뷰 등을 묶어서 해당 부분을 참고할 수 있게 하고 , 이메일이나 앱 푸시등으로 사용자에게 주기적으로 안내합니다.) \n\n-어떤 사용자들을 타겟하고 있는지 적어주세요\n(ex 주말에 평범한 데이트가 아닌 특별한 데이트를 찾거나, 미취학아동들과 같이 갈수있는 체험형 코스를 찾는 사용자를 대상으로 합니다.) \n\n# 2\\. 회의 진행/ 모임 방식\n\n-1주에 몇번정도 회의나 모임을 진행할 계획인가요?\n(ex - 1주일에 1회/2회 정도 정기적으로 회의합니다)\n\n-온/오프라인 회의 진행시 진행방식을 적어주세요\n(ex - 온라인은 줌을 활용하고, 오프라인은 강남역 카페등을 대관할예정입니다, 커뮤니케이션은 슬랙을 위주로 사용합니다 )\n\n# 3\\. 그외 자유기재\n\n(ex 대학생분들만 지원해주시면 감사하겠습니다.)',1,0);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-15 14:53:32
