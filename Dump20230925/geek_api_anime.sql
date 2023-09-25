-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: geek_api
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `anime`
--

DROP TABLE IF EXISTS `anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anime` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `imagen` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime`
--

LOCK TABLES `anime` WRITE;
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
INSERT INTO `anime` VALUES (1,'Ansatsu Kyoushitsu','2019-10-27',NULL,NULL),(2,'Ataque a los titanes','2019-10-28',NULL,NULL),(3,'B the beginning','2019-12-28',NULL,NULL),(4,'Black clover','2019-12-28',NULL,NULL),(5,'Bleach','2019-10-27',NULL,NULL),(6,'Boku no hero','2019-10-28',NULL,NULL),(7,'Bungou stray dogs','2019-10-28',NULL,NULL),(8,'Chainsawman','2022-11-02',NULL,NULL),(9,'Classroom of the elite','2022-12-28',NULL,NULL),(10,'Code gueas','2019-10-27',NULL,NULL),(11,'Cowboy bebop','2019-10-27',NULL,NULL),(12,'Cyberpunk Edgerunners','2022-11-02',NULL,NULL),(13,'Death note','2019-10-27',NULL,NULL),(14,'Devilman cry baby','2019-12-28',NULL,NULL),(15,'Dr stone','2019-10-27',NULL,NULL),(16,'Fire force','2020-03-03',NULL,NULL),(17,'Full metal alchemist','2019-10-28',NULL,NULL),(18,'Gintama','2023-08-14',NULL,NULL),(19,'Haykyu','2022-05-03',NULL,NULL),(20,'Hellsing ultimate','2019-10-28',NULL,NULL),(21,'Hunter x hunter','2019-10-28',NULL,NULL),(22,'Jojos bizarre adventure','2021-10-27',NULL,NULL),(23,'Jujutsu no kaisen','2021-01-19',NULL,NULL),(24,'Kaguya sama','2022-08-26',NULL,NULL),(25,'Kimetsu no yaiba','2022-11-10',NULL,NULL),(26,'Link click','2023-07-08',NULL,NULL),(27,'Made in abyss','2019-10-28',NULL,NULL),(28,'Madoka Magica','2022-05-03',NULL,NULL),(29,'Mob psycho','2019-10-28',NULL,NULL),(30,'Monster','2019-10-27',NULL,NULL),(31,'Nanatsu no taizai','2019-10-27',NULL,NULL),(32,'Naruto','2019-10-27',NULL,NULL),(33,'One piece','2019-10-27',NULL,NULL),(34,'One punch man','2019-10-28',NULL,NULL),(35,'Overlord','2022-08-26',NULL,NULL),(36,'Psycho pass','2019-10-28',NULL,NULL),(37,'Record of ragnarock','2023-02-12',NULL,NULL),(38,'Sirius the jaeger','2019-12-28',NULL,NULL),(39,'Spy family','2023-08-01',NULL,NULL),(40,'Tekken bloodline','2022-12-07',NULL,NULL),(41,'Tengen Toppa Gurren Lagann','2019-10-27',NULL,NULL),(42,'Tokyo Ghoul','2019-10-27',NULL,NULL),(43,'Tokyo revengers','2021-09-30',NULL,NULL),(44,'Vinland saga','2020-01-13',NULL,NULL),(45,'Yakusoku no neverland','2019-10-27',NULL,NULL);
/*!40000 ALTER TABLE `anime` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25  9:40:15
