-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `idBlog` int NOT NULL,
  `Type` tinyint NOT NULL,
  `Title` varchar(45) NOT NULL,
  `Content` varchar(45) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Image` varchar(45) NOT NULL,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`idBlog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (0,1,'Hello World','D:/Project1/back/cmd.docx','Nagham','D:/Project1/back/image.jpeg','Science Teacher'),(1,1,'Hello World','D:/Project1/back/cmd.docx','Nagham 1','D:/Project1/back/image.jpeg','Science Teacher'),(2,1,'Hello World','D:/Project1/back/cmd.docx','Nagham 2','D:/Project1/back/image.jpeg','Science Teacher'),(3,1,'Hello World','D:/Project1/back/cmd.docx','Nagham 3','D:Project1/back/image.jpeg','Science Teacher'),(4,1,'Hello World','D:/Project1/back/cmd.docx','Nagham 4','D:/Project1/back/image.jpeg','Science Teacher'),(6,0,'Hello World','D:/Project1/back/cmd.docx','karim 1','D:/Project1/back/image.jpeg','Grade 6 student'),(7,0,'Hello World','D:/Project1/back/cmd.docx','karim 2','D:/Project1/back/image.jpeg','Grade 6 student'),(8,0,'Hello World','D:/Project1/back/cmd.docx','karim 2','D:/Project1/back/image.jpeg','Grade 6 student'),(9,0,'Hello World','D:/Project1/back/cmd.docx','karim 3','D:/Project1/back/image.jpeg','Grade 6 student'),(10,0,'Hello World','D:/Project1/back/cmd.docx','karim 4','D:/Project1/back/image.jpeg','Grade 6 student');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-29 22:04:02
