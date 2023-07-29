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
  `content` varchar(15000) DEFAULT NULL,
  `hashTag` varchar(45) DEFAULT NULL,
  `viewCount` int DEFAULT '0',
  `likeCount` int DEFAULT '0',
  `chatCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (101,'[항해99 파트타임] 현업을 찐하게 경험하실 예비 UX.md','/009.png','박아지','# 제목 없음\n\n\n\n▶ 항해99 파트타임 이란?\n\n직장과 병행하며 개발자 커리어 전환을 준비하는 분들을 위한 \"파트타임 개발자 부트캠프\" 입니다.\n\n항해99 파트타임의 정규 일정은 다음과 같습니다.\n\n- 매 주 월/수/금 오후 8시 ~ 오후 12시\n- 매 주 토 오전 10시 ~ 오후 7시\n\n?예비 개발자와 함께 웹 서비스를 런칭하고 유저 테스트까지 받을 UX/UI 디자이너 팀원을 모집합니다.\n\n\"내 포트폴리오에 있는 서비스가 실제 시장에 나간다면 어떻게 될까?\"\n\n\"취업 전에 실무와 같은 프로젝트 경험을 해볼 수 있을까?\"\n\n\"현업 시니어 디자이너에게 피드백을 받아 볼 방법은 없을까?\"\n\n고객을 유치해본 적이 없는, 가상의 포트폴리오가 고민이었다면,\n\n개발자와 함께 실제 고객이 이용 가능한 서비스를 디자인해보세요 :)\n\n\"UI/UX 경력이 없는데, 할 수 있을까?\" 보다는, \"재밌게, 열심히 하면 되지!\"라는 마음가짐으로 지원해 주세요. 예비 개발자들과 함께 실력을 늘려가는 과정이기에, 경력에 상관없이 지원이 가능합니다.\n\n▶요건\n\n- 현업 디자이너, 디자인 전공 대학생 또는 디자인 직종 취준생\n- 정규 일정 중 2일 이상, 팀 회의에 참석하실 수 있는 분 (100% 온라인, 세부 일정 팀 협의)\n\n▶지원 마감\n\n~ 05/30(화) \\*정원 초과시 조기 마감 예정\n\n▶ 지원단계 : 구글폼 신청 -> 지원서 검토 -> 화상 인터뷰(10 ~ 15분 소요)\n\n▶활동기간\n\n6/9(금) ~ 7/28(금) (총 7주)\n\n▶참가비용\n\n없음\n\n▶프로젝트를 통해 얻어갈 수 있는 것\n\n1. 실제 서비스를 디자인 & 개선하며 완성도 높은 포트폴리오 제작 (흔치 않은 기회!)\n\n2. 시니어 디자이너의 온보딩 교육(기획, 와이어 프레임, 피그마 디자인 등)\n\n3. 시니어 디자이너의 와이어프레임 피드백 ( 실전프로젝트 1주차 중 진행 예정 )\n\n4. 디자인 실무와 유사한 경험 : 개발자와의 긴밀한 협업 & 피드백을 통한 디자인 개선\n\n5. SNS 및 광고 소재 제작 경험 ( 각 팀에 마케팅비 30만원 지원)\n\n6. 항해99의 협력사 초청 발표회에서 프로젝트 결과와 경험을 공유 (수료증 발급)\n\n7. 프로젝트 완주 시, 웹개발 종합반 강의 지급\n\n▶지원링크 : [https://forms.gle/VvzNDYavvsarYvuR8](https://forms.gle/VvzNDYavvsarYvuR8)\n\n—————\n\n적어주신 내용을 기반으로 순차적으로 연락 드리고, 지원서 합격자에 한하여 화상 인터뷰(10~15분 예정)를 진행 할 예정입니다.\n\n기한 전에도 훌륭한 분들을 모두 모시면 조기 마감 할 예정이니, 마음이 있으시다면 빠르게 슥-넣어보세요!\n\n문의: 010-8789-1248\n','',5,1,0),(102,'2022년 하반기 두번째 업데이트 엑스포 & 부스.md','/008.png','박아지','# 제목 없음\n\n# 안녕하세요 렛플입니다.2022년 10월말에 라운지 업데이트하고 나서, 벌써 1달반정도 지났네요\n\n1달에서 두달사이로 업데이트 한 약속은 꾸준히 지키고 있네요\n\n라운지 리뉴얼하고, 또 쉼없이 업데이트를 향해 달린것 같네요.  **라운지는 사실 우선순위상으로는 높은 기능은 아니었는데요** .\n\n프로젝트 소식 및 렛플인 소식이 통합을 하고나서야 ,생각하고 있는 기능/페이지들이  원활히 업데이트가 가능하다보니, 먼저 진행했었습니다.\n\n[2022년 하반기 업데이트 계획 by 렛플](https://letspl.me/story/174)\n\n[2022년 하반기 업데이트 \"렛플 2.0+ 더 비기닝\"](https://letspl.me/story/213)\n\n---\n\n# **오늘 말씀드릴 신규 기능은 \" 사이드프로젝트 엑스포\" 입니다.**\n\n사이드프로젝트를 다양한 곳에서 진행하고 계신데, 홍보할 곳이 마땅치 않은 것 같습니다.\n\n완성도 중요하지만, 사실 사용자들이 그것을 써주고, 이에 대해서 피드백 받는 것이 엄청난 성취잖아요.\n\n지금은 회원분들의 가입속도가 상당히 높고, 참여율도 상당히 높아진 상태이지만,\n\n렛플에서도 초반에 회원모집하기가 얼마나 어렵던지, 광고를 써도 회원수나 프로젝트수가 많지 않다보니 이탈율이 엄청났었던 2020년이었습니다.\n\n타 사이트에서 게시글 쓰는데 엄청 눈치보이기도 하구요.\n\n현재 렛플은 프로젝트 등록/참여 컨텐츠가 메인이었다면, 이제는 사이드프로젝트로 완성된 서비스에 대한 관리도 가능해집니다.\n\n엑스포를 바탕으로,설문을 받거나, 인터뷰 , 이벤트 등록을 할 수 있게 하는기능들이 추가로 개발될예정입니다.\n\n# **엑스포(EXPO)는** ,\n\n자신이 만든 서비스를 홍보하고 유저를 유입하고 피드백이나 히스토리를 관리를 관리할 수 기능입니다.\n\n렛플에서 만든 프로젝트를 엑스포에 등록할 수도있고 , 굳이 렛플에서 안 만드셨어도 자유롭게 등록이 가능합니다.\n\n다만 정확한 정보를 위해서 필수정보등이 검수가 필수입니다. 검수 이후에는 자유롭게 관리가 가능합니다.\n\n# **엑스포는 다음과 같은 기능으로 구성되어있습니다.**\n\n1. **공지사항** 관리\n\n2. **부스 정보 및 구독자 관리**\n\n- 구독자가 되면 , 서비스 운영자가 구독자분들에게 직접 메시지/이메일 등을 발송할 수 있는 기능이 있습니다.(추후 업데이트)\n\n3.**서비스에 의견 및 토론 기능**(댓글/대댓글)\n\n4. **개발팀 정보 등록 및 변경**\n\n- 렛플에 등록된 회원등을 서비스 개발팀으로 등록할 수 있고, 이는 이력으로 관리됩니다.\n\n- 공식사이트 및 이메일 등 등록을 통해서 관심있는 분들에게 연락을 할 수도 있습니다.\n\n5. **서비스에 대한 설명 및 각종 URL 등록+ 스크린 샷 등록**\n\n6. **서비스 리뷰 및 별점 관리**\n\n7. **기타 정보 등 등록 및 관리**\n\n인터뷰나 블로그  등을 등록해서 한눈에 볼 수 있습니다.\n\n---\n\n그 다음은 이력서입니다. 사이드프로젝트가 여러분의 이력이 될 수 있도록 렛플에서 인증하는 기능이 그 다음개발계획입니다.\n\n올해안에는 힘들것 같고, 내년 초에 으억 하는 소리 들을 수 있도록 다시 달려보겠습니다.\n\n# **그 외에도 이것까지 된다고?! 라는 기능들이 기획되어 있습니다. 엑스포는 그것을 향한 출발인 것 같습니다.**\n\n여전히 그렇지만 당분간 불안정적일 가능성이 있습니다. 빠르게 안정화하겠습니다.','',0,0,0),(103,'CozyBlog의 노하우2 블로그 조회수는 어떻게 구현할까 바로 Plau','/012.png','박아지','\\# 제목 없음\n\n<br>\n\\# \\*\\*들어가며\\*\\*\n\n<br>\n안녕하세요 \\*\\*코지 블로그\\*\\* 개발자 문대승입니다. 벌써 코지블로그를 시작한지 3달이 지났네요! 시간이 지난만큼 디자이너분도 또 한분 합류해서 팀원이 벌써 4명으로 늘었습니다.(야호 ?) 새로오신 디자이너님 소개는 다음 포스팅에 전하도록 할게요!\n\n<br>\n\n<br>\n\\# \\*\\*조회수 기능 뭐가 어렵나?\\*\\*\n\n<br>\n코지 블로그는 아래와 같이 포스트 글에 조회수를 제공하고 있습니다.\n\n<br>\n\\[https://imagedelivery\\.net/7neptq\\_CvhcnBjKt8qQ9PQ/23505796\\-6cf9\\-495e\\-88e0\\-93b999731800/public\\]\\(https://imagedelivery\\.net/7neptq\\_CvhcnBjKt8qQ9PQ/23505796\\-6cf9\\-495e\\-88e0\\-93b999731800/public\\)\n\n<br>\n조회수 기능을 제가 구현했다면 먼저 이렇게 시도했을거 같아요!\n\n<br>\n먼저 아래와 같이 엔티티를 설정하고\\~\n\n<br>\n그런데.. 이렇게만 구현하면 정말 많은 문제가 생깁니다. 조회할때마다 DB에 Write해야하는 부담은 무시한다 해도 저 코드는 \\`중복된 조회수\\`를 걸러낼 순 없습니다. 즉 무슨말이냐면 제가 같은글을 무한히 새로고침하면 조회수도 무한이 증가되어 버린다는 것이죠. 이렇게 되면 친구들끼리 조회수 품앗이 해주면서 서로의 글 조회수를 뻥튀기? 해버릴 수 있습니다. 즉 조회수는 신뢰성을 잃어버리게 되는 것이죠\n\n<br>\n\\#\\# \\*\\*중복 조회 검출\\.\\. 매우 어렵다\\!\\*\\*\n\n<br>\n어떤게 유니크한 조회이고 어떤게 중복된 조회일까요?? 글을 조회한 유저가 이전에 조회했던 유저인지를 판별하면 될까요? 그렇게 한다면, 한 글에 대해서 어떤 유저들이 조회했는지에 대해 상태를 저장하고 있어야 할 거 같습니다. 그런데 한 유저가 한번 본 글은 더 이상 조회수가 올라가지 않는 것도 이상할 거 같아요. 하루 뒤에 같은 게시글을 읽게 된다면 다시 조회수를 1 증가시키는 방법도 있을 것 같습니다.\n\n<br>\n이렇게 고민하다보면 여러 의문들이 꼬리에 꼬리를 물고 계속 떠오릅니다.\n\n<br>\n\\- 꼭 하루가 지나야 새로운 조회일까? 반나절 뒤가 더 낫지 않나?\n\\- 읽은 사람들 상태를 저장하려면 디비에 저장해야하나? 아니면 redis??\n\\- 그런데 비회원 유저는 그러면 중복 조회를 어떻게 막을 수 있지? ip를 이용해서?\n\\- 어느 글 보니까 쿠키로 구분한다던데 우리 경우에도 쓸 수 있을까?\n\\- ㅋㅋ 포기\n\n<br>\n이걸 하나하나 직접 구현하려면 머리가 깨질 지경입니다. 유튜브는 이보다 더 복잡하게 조회수를 구현한다고 해요. 아무래도 조회수는 돈과 관련된 중요한 기능이니 다른 서비스들보다 더 빡세게 중복 조회를 검출할 것 같습니다.\n\n<br>\n<br>\n<br>\n<br>\n보시면 조회수뿐만이 아니라 방문자수, 이탈률 등등 다양한 메트릭을 제공하고 있습니다. 이처럼 다양한 메트릭을 API로 제공해준 덕분에 코지블로그는 포스트 글을 조회할 때, 직접 viewCount를 저장하지 않고 Plausible API에 요청하여 가져오고 있습니다.\n\n<br>\n\\#\\# \\*\\*Plausible은 완전 무료\\!\\*\\*\n\n<br>\n외부 서비스인 Plausible api를 호출할때, 횟수 제한이 있거나 비용이 든다고 생각할 수 있는데요. 놀랍게도 Plausible은 오픈 소스입니다. 즉 우리가 직접 호스팅하면 외부 서비스가 아니라 내부 서비스가 되는 거죠.\n\n<br>\n\\*\\*Can Plausible Analytics be self-hosted?\\*\\*\n\n<br>\nYes, you can self-host Plausible Analytics. Plausible Analytics Self-Hosted is our free as in beer and free as in speech version. It’s exactly the same product as our Plausible Analytics Cloud solution, only the self-hosted version you have to install, host and manage yourself.\n\n<br>\n\n<br>\n위처럼 코지 블로그는 Plausible를 직접 호스팅해서 사용하고 있습니다. 따라서 api도 맘껏 호출할 수 있죠 ㅎㅎ.\n\n<br>\n\\#\\# \\*\\*조회수 말고 또 어떤 기능에 활용할 수 있을까?\\*\\*\n\n<br>\nPlausible을 내부호스팅하는 만큼, GA보다 더 다양한 용도로 사용자들에게 서비스를 제공할 수 있습니다. 이를테면 블로그별로 방문자 지표를 제공하는 것이죠. 방문자 지표를 제공하면 코지 블로그 사용자는 자신의 블로그에 총 몇명이 왔다 갔는지, 어느 페이지를 유심히 봤는지 또 어디서 페이지를 나왔는지를 확인할 수 있습니다. 이 기능도 열심히 개발중이니까 기대해주세요 ㅎㅎ\n\n<br>\n\\# \\*\\*글을 마치며\\*\\*\n\n<br>\n이번 글에서는 코지 블로그에서 조회수 기능을 어떻게 구현했는지에 대해 알아보았습니다. 이거 말고도 더 다양한 꿀팁들이 준비되어 있는데요. 이미 여러 글들을 써놓은 상태입니다 ㅎㅎ. 시간 될때마다 차근 차근 공유할테니 계속 지켜봐주세요\\~ 그러면 이번 글은 여기서 마치겠습니다 ? 긴글 읽어주셔서 감사합니다.','',0,1,0),(104,'렛플 리더 튜토리얼(NEW 스압주의).md','/014.png','박아지',' 제목 없음\n\n<br>\n\\# 안녕하세요 사이드프로젝트를 하는 가장 쉬운 방법 렛플입니다\\.\n\n<br>\n프로젝트 기능들이 렛플 초창기보다 많이 변경이 되서, 이번에 새로운 버전으로 다시 써보려고 합니다.\n\n<br>\n홍보나, 일감 등의 기능도 충실히 설명해드리고자 합니다.\n\n<br>\n\\-\\-\\-\n\n<br>\n\\# 설명에 앞서\\, 프로젝트 노출정책과 채팅과 관련 내용 알려드릴게요\\.\n\n<br>\n\\# \\*\\*노출제외\\*\\*\n\n<br>\n프로젝트는 리더분이 로그인 후 30일간 안 들어오시면, 노출에서 제외됩니다.\n\n<br>\n(30일동안 안 들어오시는것이라면, 멤버를 모두 구하셨거나 , 프로젝트가 진행되지 않는 것으로 간주합니다.)\n\n<br>\n또한 지원자의 경우 미응답시 14일 후 자동취소되는데,\n\n<br>\n자동취소건수가 3건이상 && 자동취소율 50% 초과되면 프로젝트는 더이상 노출되지 않습니다.\n\n<br>\n이로인하여 프로젝트 인원을 더이상 못 구하셔서 프로젝트가 자초되는 곳이 상당히 많습니다.\n\n<br>\n이미 모든 팀원을 구하셨다고 하더라도, 팀원분들이 나중에 나가실수도 있으니 응답률 관리를 미리미리 해주시기 바랍니다.\n\n<br>\n그래서 렛플의 경우, 자동취소되기 하루전에, 알림톡을 보내 드리고 있습니다.\n\n<br>\n알림톡이 오는 경우에, 당일날 거절/승인 등의 액션을 해주시면 됩니다.\n\n<br>\n\\# \\*\\*우선노출\\*\\*\n\n<br>\n노출제외가 아닌 스터디/프로젝트의 경우 다음과 같은 기준으로 노출됩니다.\n\n<br>\n\\*\\*1) 최근 일주일간 신규 퀘스트가 존재하는지 (Q 마크)\\*\\*\n\n<br>\n\\*\\*2) 신규로 개설되었는지? (N 마크)\\*\\*\n\n<br>\n3) 현재 모집 중인 상태인지?\n\n<br>\n4) 최근 업데이트가 있는지?\n\n<br>\n5) 스터디 우선 노출\n\n<br>\n6) 프로젝트 점수\n\n<br>\n(리더의 레벨 및 프로젝트 활동기록으로 매일 갱신됩니다)\n\n<br>\n7) 리더 최근 로그인날짜 순\n\n<br>\n즉 신규 모임이 아니더라도 퀘스트를 주기적으로 작성하시면, 상단 노출이 가능하니, 이점 참고하셔서 퀘스트를 작성 및 운영하시기 바랍니다.\n\n<br>\n\\-\\-\\-\n\n<br>\n\\# \\*\\*1:1 대화는 23년 5월 3일부터 쭉 무료입니다\\.\\*\\*\n\n<br>\n모임내 지원자와의 채팅의 경우, 지원자의 포인트 설정과 상관없이 무료로 진행이 가능합니다.\n\n<br>\n지원대기기간 14일동안 언제나 무료로 사용이 가능하니, 보유하신 커피포인트와 상관없이 많은 커뮤니케이션하세요.\n\n<br>\n커피 포인트가 무료더라도, 채팅이 완료 시 프로필 리뷰하실 수 있습니다.\n\n<br>\n\\[상세내용은 이 퀘스트를 확인해보세요\\]\\(https://letspl\\.me/story/381\\)\n\n<br>\n\\# \\*\\*그룹챗 대화\\*\\*\n\n<br>\n렛플에서는 무료로 그룹챗을 만드실 수 있습니다.\n\n<br>\n그룹챗은 멤버로 확정된 상태에서 그룹챗 초대를 하시면, 그룹챗에 초대됩니다.\n\n<br>\n다만 그룹챗은 멤버를 강제로 방출할 수 없기 때문에, 리더분이 방을 나가셔야지만 방이 폭파되니 이용에 참고하시기 바랍니다.','',0,0,0),(105,'사이드프로젝트 비교하기(URURL VS 링크젬).md','/020.png','박아지','# 제목 없음\n\n# **1.URURL**\n\nURL 저장/관리 및 습관화 서비스 (21년 9월 팀빌딩 시작 ~ 23년 1월 오픈)\n\n약 1년 4개월정도 걸린 프로젝트입니다.\n\n[https://letspl.me/project/205](https://letspl.me/project/205)\n\nURURL은 성장하고 싶은 PM분들을 위한 프로젝트예요.\n\n1) 추후에 읽으려고 저장했던 **유의미한 콘텐츠들이 흩어지지 않게 URURL에 가져오도록** 하고,\n\n2) 가져온 **콘텐츠들을 읽으면서 인사이트를 쌓아가는 서비스**입니다.\n\n※ 현재는 PM/PO/기획자를 위한 기능에 초점을 맞추고 있지만, 추후 개발자와 디자이너 등 다양한 직군으로 확장할 예정\n\n# **2.링크북(링크젬)**\n\n직장인타겟 링크 저장 웹서비스 (22년 5월 팀빌딩 시작 ~ 23년 2월 오픈)\n\n약 8개월정도 걸린 프로젝트입니다.\n\n[https://letspl.me/project/375](https://letspl.me/project/375)\n\n직장생활을 하면서 하루에도 수십개 씩 받게 되는 링크들이 정리가 안되서 고민하신적 있지 않으신가요?\n\n업무에 필요한 링크 부터 업무시간에 우연치 않게 찾게 된 좋은 정보들 까지 유용한 링크들을 모아 두어 관리하면 얼마나 좋을까? 라는 생각에 시작하게 된 프로젝트입니다.\n\n---\n\n# **URURL (**[https://www.ururl.me/](https://www.ururl.me/))\n\n1년이상의 개발하다보니까 오픈했을때 부터 기능이 다양하게 많습니다.\n\n웹페이지 뿐만 아니라, 카카오톡 채널, 그리고 크롬 브라우저까지 동시에 오픈해서 사용하기 좋은 느낌입니다.\n\nSNS 연동은 카카오톡이 지원됩니다. 아마 카카오톡 채널연동때문에 카카오톡으로 일부로 해놓으셨지 않을까 ?!\n\n웹페이지 :\n\n[https://www.ururl.me/](https://www.ururl.me/)\n\n카카오톡 채널:\n\n[https://pf.kakao.com/_kjhAb](https://pf.kakao.com/_kjhAb)\n\n크롬 :\n\n[https://chrome.google.com/webstore/detail/ururl-url%EC%9D%84-%EA%B0%80%EC%9E%A5-%EC%89%BD%EA%B2%8C-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/hmbkeejbnpmhigeggakaphloaijneenc?hl=ko&authuser=0](https://chrome.google.com/webstore/detail/ururl-url%EC%9D%84-%EA%B0%80%EC%9E%A5-%EC%89%BD%EA%B2%8C-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/hmbkeejbnpmhigeggakaphloaijneenc?hl=ko&authuser=0)\n\n사실 내가 하나씩 웹페이지가서 복붙하기에는 너무 귀찮기 때문에 저렇게 채널이 많은게 좋은것 같구요\n\n어떻게든 귀찮음을 줄여보겠다고 생각하신것들이 너무 대단하네요. 그래서 기간은 좀 오래 걸리신것 같아요.\n\n- \n    - 웹은 내가 기록한 것을 크게 보는 기능\n- 카카오톡채널과 크롬은 기록하는 기능 이렇게 두개로 구분되는 것 같습니다.\n\n# 1) 크롬의 경우 익스텐션으로 깔아놓으면, 브라우저에서 바로 저장할 수 있는데, 상당히 편합니다.\n\n\n# 2) 카카오톡으로 저장도 가능한데, 생각보다 심플해서 좋았습니다. 그냥 채팅방에 있는 것을 복붙하면 될것 같은 느낌이예요\n\n\n# 3) 그러면 다음과 같이 웹에 잘 반영이 되네요. 웹에서도 저장하는것은 당연히 잘되구요.\n\n\n---\n\n# 링크젬 \n\nURURL보다는 채널이 웹에 한정되어있긴 하지만, 8개월만에 나왔고, 기능도 계속 추가되고 있는 모양입니다.\n\nSNS는 네이버로그인이 지원됩니다.\n\nURURL의 경우 타인에게 공유하는 느낌이 강하다고 하면, 링크젬은 내가 보기위해서 저장하는 경향이 더 큰것 같습니다.\n\n그래서 젬박스에 모아놓고 보는데, 아마 나중에 대중에게 공유를 할것인지 등의 기능이 추가되지 않을까 싶네요\n\n약간 어려운 느낌이 있었어요 폴더를 고르기 어려웠고, 태그가 없던 것도 조금 아쉬운 것 같아요\n\n카테고리화하면 좀 좋을 것 같은 느낌이었거든요.\n\n또한 내가 원하는 기사보다는, 남이 많이 보거나 저장하는 링크를 좀 보고싶은 니즈가 강했었는데, 아마 업데이트되지 않을까 생각합니다.\n\n지금은 아마 퀄리티 컨틀로 때문에 직접 PICK을 하는 구조인데, 이건 나중에 가면 변경될것 같아요.\n\n위에 말한것들은 팀분들께서 모두 생각하고 계시는 기능일껍니다. 아마 ^^\n\n베타 서비스 진행중이니, 안해보신 분들은 해보세요\n\n\n---\n\n# 이상 URL 관리하는 서비스 비교였습니다.\n\n소개드린 각 서비스들의 부스입니다. 리뷰는 서비스 만드시는 사람들에게 큰 도움이 됩니다.\n\n[URURL] [https://letspl.me/booth/ururl](https://letspl.me/booth/ururl)\n\n[링크젬] [https://letspl.me/booth/link-gem](https://letspl.me/booth/link-gem)\n\n오늘도 재밌는 프로젝트 되세요~','',0,0,0),(106,'스타트업계의 빌보드 차트 프로덕트 랭크를 준비하다.md','/018.png','박아지','# 제목 없음\n\n프로덕트 헌트는 스타트업계의 빌보드 차트로, 제품소개와 토론을 통해 더 나은 스타트업 생태계를 꾸려나가는 커뮤니티 입니다.\n\n우리가 즐겨쓰는 노션도 프로덕트 헌트를 통해 세상에 알려졌답니다.\n\n스타트업 관련 일을 오랫동안 해오며 한국에도 좋은서비스와 아이디어를 널리 알릴수 있는 커뮤니티가 있으면 좋겠다고 생각해왔고,좋은분들과 함께 의기투합 하고자 사이드프로젝트로 도전해보고자 합니다.\n\n이번 사이드프로젝트를 바탕으로가 가칭 프로덕트랭크 를 준비중에 있으며\n\n기획자, 개발자, 마케터, 개발자등 새로운 서비스에 관심 많은 다양한 직군의 종사자를 대상으로\n\n좋은 프로젝트를 널리 알릴 수 있게 하겠습니다.\n\n지금까지 2회의 회의가 진행되었고\n\n1. 프로덕트헌트 벤치마킹을 통해 최소 핵심기능 구현을 1차 목표로 하고 (제품출시, 투표, 댓글, 프로필)\n\n2. 부가적인 기능을 추가해 나가면 좋을것 같습니다.\n\n현재 기획, 프론트엔드, 백엔드 각 한분씩 모집이 완료되었고\n\n추가로 충원중에 있으니\n\n궁금하시거나 상세한 내용은 다음 오픈채팅을 이용해주시기 바랍니다.\n\n- 다른 재밌는 프로젝트도 많이 있으니 편하게 문의주세요 :)\n\n[https://open.kakao.com/o/sBZrNNMe](https://open.kakao.com/o/sBZrNNMe)','',0,0,0),(107,'원티드 개발자 리포트(취업&이직).md','/001.png','박아지','# 제목 없음\n\n안녕하세요 렛플입니다.\n\n다양한 자료를 서치하다보니, 채용자료 중 괜찮은 설문조사 자료가 있어서 공유합니다.\n\n원티드에서 개발자들이 취업/고용할때 중요한 지표로 설문조사한 결과예요\n\n간단히 말해서는 , 개발자를 채용할 때는 아래와 같은 능력을 중요하게 평가한다고 해요.\n\n1. **커뮤니케이션능력**\n\n**프로젝트 경험**\n\n**성장가능성**\n\n**개발경력**\n\n순으로 중요한 평가를 하시는 것 같네요\n\n개발경력은 실제 경력자 분들에게 적용되는 것 같고\n\n커뮤니케이션능력, 프로젝트 경험이 있다면, 취업이나 이직할때 좋은 평가를 받을 수 있을 것 같네요\n\n전체 리포트는 하단에서 다운로드 가능합니다.\n','',0,0,0),(108,'초기 IT 서비스를 만들고자 할 때 노하우!.md','/002.png','박아지','# 제목 없음\n\n안녕하세요! IT 서비스 초기 단계의 팀이 보면 좋을 웨비나를 만들고 있어 렛플인 분들께 도움이 될 것 같아 공유드립니다.\n\n서비스 구축 전에 팀원들을 모으는 팀 빌딩 단계에서 놓치지 말아야 할 부분들, 그리고 설계 단계에서 고려하고 시작하면 좋을 부분들을 담고 있으니,\n\n관심 있으신 분들은 신청하시면 좋을 것 같아요!!\n\n? 일시: 2023년 4월 13일 목요일 저녁 9시\n\n? 장소: Zoom (온라인)\n\n? 신청링크 : [http://bit.ly/3nqlE4W](http://bit.ly/3nqlE4W)\n\n✅ 이렇게 진행돼요.\n\n- 오프닝 : 아이스브레이킹 및 팀 소개(테크워커, 팀피어)\n- 1부. 팀빌딩할 때 잊지 말아야 할 팀빌딩 플레이북 by. 팀피어\n- 2부. 나중을 위해 먼저 고려하면 좋을 기술적인 부분들 by. 테크워커\n- 3부. 간단한 QnA\n\n✅ 노쇼 방지를 위한 참가비\n\n- ~4/5 신청 시 : 5천원 (얼리버드 혜택)\n- 4/6~4/11 신청 시 : 1만원\n- 웨비나 만족도 설문 후, 스타벅스 커피 기프티콘 제공 예정입니다.\n','',0,0,0),(109,'코딩 ❌웹사이트 제작부터, 데이터 분석 및 자동화까지.md','/007.png','박아지','\\# 제목 없음\n\n<br>\n여러분이 만약,\n\n<br>\n\\- 퍼스널 브랜딩을 꿈꾸는 직장인\n\\- 개발을 하나도 모르는 기획 및 디자이너\n\\- 빠르게 제품 검증을 해보고싶은 예비 창업자\n\\- 노션을 문서 용도로만 쓰는 대학생\n\n<br>\n이라면 더욱 관심있게 볼 수 있는 내용입니다.\n\n<br>\n\\# \\*\\*No\\-코딩으로 불가능이 없는 시대\\!\\*\\*\n\n<br>\n\\# \\*\\*‘웹사이트 개발 → 사이트 접속 유저 분석 → 유저 Data 저장 및 e\\-mail 발송 자동화’\\*\\*\n\n<br>\n위의 일련의 과정들을 코딩없이 가능하단 사실을 알고 계셨나요?\n\n<br>\n? 웹사이트 개발: \\*\\*Notion\\*\\* → \\*\\*oopy\\*\\*\n\n<br>\n? 유저 분석: \\*\\*oopy\\*\\* → \\*\\*GA\\*\\*\n\n<br>\n? Data 저장 및 e-mail 자동화: \\*\\*Notion\\*\\* → \\*\\*Zapier\\*\\*\n\n<br>\n\\*\\*굵게 표시된 Tool\\*\\*을 통해 코딩없이 빠르고 편하게 작업이 가능합니다!\n\n<br>\n이번 글에서는, 자동화 시스템 만들기에 대해 알아 볼 예정입니다. 웹사이트 제작에서 데이터 분석에 관한 내용이 궁금하시다면, 아래 링크를 클릭해주세요!\n\n<br>\n\\[https://letspl\\.me/story/369\\]\\(https://letspl\\.me/story/369\\)\n\n<br>\n\\#\\# \\*\\*자동화 시스템 만들기\\*\\*\n\n<br>\n자동화 시스템이 없다면, (A) 메일함 접속, (B) 고객의 연락 확인, (C) 회신. \\*\\*3단계의 과정\\*\\*을 매번 시도하며, 고객의 Data를 따로 기록하는 것에 있어서 리소스를 낭비하게 됩니다. 하지만 이 모든것을 자피어(Zapier)를 통해 할 수 있습니다.\n\n<br>\n자피어는 서로 다른 앱을 연결 및 연동시켜서 워크플로우 자동화를 돕는 툴입니다. 위의 3단계의 과정을 보면, (A) 고객의 연락을 받고, (B) 해당 연락의 이메일 추출, (C) 회신 메일 전송 기능이 필요하며, (A)는 구글 폼, (C)는 G-mail 을 통해 제공됩니다. 이때 (A)와 (C)를 이어주는 (B)를 자피어가 하게 됩니다.\n\n<br>\n\\[https://eopla\\.net/file\\_path\\_host?token=lUhp2TT6zvg1snCs0rUXI3zzXn2GBnkgiSR2au0SQCgsEYQDujspZnE5pvEtifE8rvoYOo0Of5fnLE2afXxjDXGQymPybITQW%2FLOnG9lF9k%3D\\-\\-08ouaVpWqi%2FUyEup\\-\\-wzNQ%2FZcZV16HR5f3D714jw%3D%3D\\]\\(https://eopla\\.net/file\\_path\\_host?token=lUhp2TT6zvg1snCs0rUXI3zzXn2GBnkgiSR2au0SQCgsEYQDujspZnE5pvEtifE8rvoYOo0Of5fnLE2afXxjDXGQymPybITQW%2FLOnG9lF9k%3D\\-\\-08ouaVpWqi%2FUyEup\\-\\-wzNQ%2FZcZV16HR5f3D714jw%3D%3D\\)\n\n<br>\n\\#\\# \\*\\*\\*\\*\n\n<br>\n\\#\\# \\*\\*Trigger와 Action\\*\\*\n\n<br>\n자피어는 플러그 인을 연결하듯이 자피어에서 외부 앱과 쉽게 연결할 수 있고, 이렇게 \\*\\*(1) 연결된 앱에서 수집한 데이터를 (2) 다른 앱으로 전송\\*\\*할 수 있습니다. 예를 들어, (1) 구글 폼에서 수집한 Data를 (2) 구글 스페드 시트, 슬랙 등으로 전송하는 워크플로우를 만드는 것입니다. 이때 특정 \\*\\*워크플로우를 시작시키는 ‘트리거(Trigger)\\*\\*’와, \\*\\*워크플로우에 의해 진행되는 ‘액션(Action)’\\*\\*을 설정해주는 것이 자피어의 시작입니다.\n\n<br>\n아래와 같은 워크플로우가 있다고 봅시다.\n\n<br>\n(1) 유저가 사이트 내의 구글 폼 작성\n\n<br>\n(2) 노션 DB에 고객 데이터 기록\n\n<br>\n(3) g-mail을 통한 메일 발송\n\n<br>\n(4) 메일 전송 여부를 노션에 기록\n\n<br>\n(5) 다음 메일 발송 까지 대기\n\n<br>\n(6) 리마인드를 위한 추가 메일 발송\n\n<br>\n(7) g-mail을 통해 실제로 전송\n\n<br>\n(8) 메일 전송 여부를 노션에 기록\n\n<br>\n아래 이미지를 보면, \\*\\*(1)은 트리거\\*\\*이고, \\*\\*(2) \\~ (8)은 액션\\*\\*입니다. (1)이 발생하면 워크플로우가 실행되고, (2)\\~(8)의 액션이 자동으로 실행됩니다.\n\n<br>\n\\[https://eopla\\.net/file\\_path\\_host?token=io8vToxtNpqUDiStCyYBdsivkeZY%2Bw7DwjAjdc8y5XQi%2BifToq0EX8KCStbZKATYOPKTBtnTaaHUqOQAPB1ZPu6ro%2B7QrIOdQXpV2P7rdoc%3D\\-\\-oCw2islhKL8BiqAv\\-\\-ydPC6uEZuUzrpZ9Qfs3o1g%3D%3D\\]\\(https://eopla\\.net/file\\_path\\_host?token=io8vToxtNpqUDiStCyYBdsivkeZY%2Bw7DwjAjdc8y5XQi%2BifToq0EX8KCStbZKATYOPKTBtnTaaHUqOQAPB1ZPu6ro%2B7QrIOdQXpV2P7rdoc%3D\\-\\-oCw2islhKL8BiqAv\\-\\-ydPC6uEZuUzrpZ9Qfs3o1g%3D%3D\\)\n\n<br>\n\\#\\# \\*\\*\\*\\*\n\n<br>\n\\# \\*\\*구글 폼 연동하기\\*\\*\n\n<br>\n아래 이미지와 같이 구글 폼 연동을 했습니다. 유저의 구글폼 작성이 트리거이며, 메일 회신, 테스터 DB 관리 등이 액션입니다. 이때, \\*\\*구글 폼과 연결된 DB(구글 스프레드 시트 등) Tool이 연동이 되야 트리거로 인식이 가능합니다.\\*\\*\n\n<br>\n\\[https://eopla\\.net/file\\_path\\_host?token=Hw8i9x9l3qUH5BGCTqQDb0ZLH85uRxVnqZoGSEpwn28LTngJgAlXq43J7eumPrckw5ja27Z5T5h%2FbXw7YETrURGgdIGCTE2JuqVSjKw%2F3mw%3D\\-\\-gHJDl%2B7OepmjkS%2FJ\\-\\-nZHC2ovogLv3zkac7uRFTg%3D%3D\\]\\(https://eopla\\.net/file\\_path\\_host?token=Hw8i9x9l3qUH5BGCTqQDb0ZLH85uRxVnqZoGSEpwn28LTngJgAlXq43J7eumPrckw5ja27Z5T5h%2FbXw7YETrURGgdIGCTE2JuqVSjKw%2F3mw%3D\\-\\-gHJDl%2B7OepmjkS%2FJ\\-\\-nZHC2ovogLv3zkac7uRFTg%3D%3D\\)\n\n<br>\n따라서 아래 ‘응답’에 구글 스프레드 시트와 연결하여, 자피어도 설정 해줍니다.\n\n<br>\n\\[https://eopla\\.net/file\\_path\\_host?token=JXe5Y8eK28geMpDjiKx04yYmE%2FvG2oe6yilquDtdtNylCpmJRCG%2FQMTPAFI9Zb0oIbrkFkKH%2FjES8bChwNMcUzz8L0tW9cCJHf4uhK44V4U%3D\\-\\-Ue%2Ft98dJQAwkd0Qe\\-\\-SqP6SbUc0kZ19a63rwk3Vg%3D%3D\\]\\(https://eopla\\.net/file\\_path\\_host?token=JXe5Y8eK28geMpDjiKx04yYmE%2FvG2oe6yilquDtdtNylCpmJRCG%2FQMTPAFI9Zb0oIbrkFkKH%2FjES8bChwNMcUzz8L0tW9cCJHf4uhK44V4U%3D\\-\\-Ue%2Ft98dJQAwkd0Qe\\-\\-SqP6SbUc0kZ19a63rwk3Vg%3D%3D\\)\n\n<br>\n\\#\\# \\*\\*이메일 자동화 설정하기\\*\\*\n\n<br>\n이메일 발송을 위해 \\*\\*G-mail을 액션 App으로\\*\\* 설정해줍니다. 구글 폼에서 수집한 이름 데이터를 메일 전문에 추가하고, 이메일 데이터를 받는 이로 설정했습니다.\n\n<br>\n\\[https://eopla\\.net/file\\_path\\_host?token=bQqBEUJZ0nKEYBHCA%2BE3fdfpXlJXXtPAk62FxMY9%2FiNimCUntkbD8sAq0OJ3PKiUIT92dwwy3rnrhFsbDow6G4gE%2Foz582q6mHtJSWvRpTY%3D\\-\\-uI2bkQQAZUny%2Bwd%2B\\-\\-cuUBeb3kgscQcztqNnEyuQ%3D%3D\\]\\(https://eopla\\.net/file\\_path\\_host?token=bQqBEUJZ0nKEYBHCA%2BE3fdfpXlJXXtPAk62FxMY9%2FiNimCUntkbD8sAq0OJ3PKiUIT92dwwy3rnrhFsbDow6G4gE%2Foz582q6mHtJSWvRpTY%3D\\-\\-uI2bkQQAZUny%2Bwd%2B\\-\\-cuUBeb3kgscQcztqNnEyuQ%3D%3D\\)\n\n<br>\n\\*\\*코딩없이 자동화 시스템을 만드는 방법\\*\\*을 정말 간략하게 알아보았습니다.\n\n<br>\n이에 대한 추가적인 정보는 아래에서 확인이 가능합니다. 감사합니다.\n\n<br>\n\\*\\*\\[https://bit\\.ly/41fVFfG\\]\\(https://bit\\.ly/41fVFfG\\)\\*\\*','',0,0,0),(110,'해커톤허브 - 365일 언제나 해커톤이 열리는 곳.md','/016.png','박아지','# 제목 없음\n\n\"100시간 회의보다 한 번 만들어 보는 것이 낫고, 100번 면접 보다 한 번 같이 일해 보는 것이 낫지 않을까요?\"\n\n- **해커톤**으로 하루만에 아이디어를 **테스트**하는 곳\n- 365일 누구나 **팀별 해커톤을 모집**할 수 있는 곳\n- 서툴러도 괜찮아요 :) **가볍게 다시 도전**하면 되니까!\n    - 무한한 해커톤이 열리는 곳, **해커톤허브**에서 : [https://bit.ly/3ZnDnHC](https://bit.ly/3ZnDnHC)\n\n...\n\n**지난 스토리***( [https://letspl.me/story/341](https://letspl.me/story/341) , DFIND 회고록)에서 언급했듯이,\n\n나는 1년 전 즈음에 **연쇄창업 라이프**를 꿈꾸며 그 발판이 될 \"**해커톤허브\"**라는 프로젝트를 기획했다가, 팀원들과 논의 하면서 **솔루션 피봇팅**을 했었다.\n\n**솔루션 피봇팅**이란, 기획 초기에 그렸던 아래의 \"**고객 여정 지도**\"를 기준으로 생각해보면, 양대 **Pain point**는 1. \'팀을 이루고 싶다\' 2. \'프로젝트 완성 좀 해보자\' 였는데, 이를 해결하기 위한 솔루션을 **해커톤**(하루짜리 사이드프로젝트)에서 **2단계 진행방식**(디자인 단계/개발 단계, ***지난 스토리** 참조)으로 바꾼 것이다.\n\n\n▲ 1년 전 작성했던 해커톤허브의 고객여정지도. (비슷한 문제의식을 공유하는 **렛플**과 유사한 점이 있다.)\n\n대부분의 **사이드프로젝트**가 그러하듯이 일정은 예정보다 **장기화** 되었고, 기획 및 디자인을 완성하고 보니 **1년**이라는 시간이 훌쩍 지나갔다.\n\n팀은 회고 및 리프레시를 위해 **방학**을 가지고 있지만, 나에게는 고민이 남아있다.\n\n**2단계로 나눴다고 해도 너무 길다**는 점이다. \'디자인 단계\' 혹은 \'개발 단계\'에 1년 가까이 걸린다면, 10개의 포트폴리오를 만드는데 10년이 걸리는 셈이다. 그 중에 좌초되는 프로젝트가 생긴다거나 본업이 바빠지거나 하면 10개도 채우기 힘들것이다. 물론 포폴이 필요한 **사회초년생**들이 취직을 준비할때는 1개라도 **퀄리티** 있게 만드는 것이 좋겠지만, 나처럼 스타트업을 준비하는 **예비창업자**들에게는 **빠른 실험/가설 검증**이 필요하다.\n\n\n\n그래서 나는 위의 철학에 기초한 **극도로 단순한 테스트 버전**을 개인적으로 후다닥 개발했고 이제 검증해보려고 한다. (당연히 팀원들에게도 말했음ㅋ)\n\n- 모두 고민하지 말고 한번 **해**보세요! :)\n- \n- **해커톤허브** 보러가기 : [https://bit.ly/3ZnDnHC](https://bit.ly/3ZnDnHC)','',0,0,0),(111,'박용호','/001.png','박아지','박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호\n박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호박용호','',0,0,0);
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

-- Dump completed on 2023-06-16 12:13:32