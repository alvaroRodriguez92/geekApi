-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: geek_api
-- ------------------------------------------------------
-- Server version	8.0.34

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
  `imagen` varchar(200) DEFAULT NULL,
  `nota` decimal(3,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime`
--

LOCK TABLES `anime` WRITE;
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
INSERT INTO `anime` VALUES (1,'Ansatsu Kyoushitsu','2019-10-27',NULL,NULL,7.1),(2,'Ataque a los titanes','2019-10-28',NULL,NULL,8.9),(3,'B the beginning','2019-12-28',NULL,NULL,5.5),(4,'Black clover','2019-12-28',NULL,NULL,7.0),(5,'Bleach','2019-10-27',NULL,NULL,7.9),(6,'Boku no hero','2019-10-28',NULL,NULL,8.5),(7,'Bungou stray dogs','2019-10-28',NULL,NULL,8.3),(8,'Chainsawman','2022-11-02',NULL,NULL,8.0),(9,'Classroom of the elite','2022-12-28',NULL,NULL,7.0),(10,'Code gueas','2019-10-27',NULL,NULL,8.6),(11,'Cowboy bebop','2019-10-27',NULL,NULL,9.0),(12,'Cyberpunk Edgerunners','2022-11-02',NULL,'cyberpunk-edgerunners-david-lucy-moon-4k-wallpaper-uhdpaper.com-532@1@i.jpg',8.1),(13,'Death note','2019-10-27',NULL,NULL,8.0),(14,'Devilman cry baby','2019-12-28',NULL,NULL,6.0),(15,'Dr stone','2019-10-27',NULL,NULL,6.5),(16,'Fire force','2020-03-03',NULL,NULL,6.2),(17,'Full metal alchemist','2019-10-28',NULL,NULL,8.7),(18,'Gintama','2023-08-14','Insuperable.','aoeLWKA_700b.jpg',9.5),(19,'Haykyu','2022-05-03',NULL,NULL,8.7),(20,'Hellsing ultimate','2019-10-28',NULL,NULL,6.9),(21,'Hunter x hunter','2019-10-28',NULL,NULL,8.9),(22,'Jojos bizarre adventure','2021-10-27','La puta ostia. Ora ora oraora!!!!',NULL,9.0),(23,'Jujutsu no kaisen','2021-01-19',NULL,NULL,8.8),(24,'Kaguya sama','2022-08-26',NULL,NULL,7.7),(25,'Kimetsu no yaiba','2022-11-10',NULL,NULL,9.1),(26,'Link click','2023-07-08',NULL,NULL,7.9),(27,'Made in abyss','2019-10-28',NULL,NULL,7.1),(28,'Madoka Magica','2022-05-03',NULL,NULL,6.0),(29,'Mob psycho','2019-10-28',NULL,NULL,8.9),(30,'Monster','2019-10-27',NULL,NULL,8.8),(31,'Nanatsu no taizai','2019-10-27',NULL,NULL,6.8),(32,'Naruto','2019-10-27','Historia del anime.',NULL,9.1),(33,'One piece','2019-10-27',NULL,NULL,9.0),(34,'One punch man','2019-10-28',NULL,NULL,8.6),(35,'Overlord','2022-08-26',NULL,NULL,8.0),(36,'Psycho pass','2019-10-28',NULL,NULL,7.3),(37,'Record of ragnarock','2023-02-12',NULL,NULL,8.0),(38,'Sirius the jaeger','2019-12-28',NULL,NULL,5.0),(39,'Spy family','2023-08-01',NULL,NULL,7.4),(40,'Tekken bloodline','2022-12-07',NULL,NULL,6.7),(41,'Tengen Toppa Gurren Lagann','2019-10-27',NULL,NULL,7.6),(42,'Tokyo Ghoul','2019-10-27',NULL,NULL,7.0),(43,'Tokyo revengers','2021-09-30',NULL,NULL,7.2),(44,'Vinland saga','2020-01-13',NULL,NULL,6.8),(45,'Yakusoku no neverland','2019-10-27',NULL,NULL,6.0);
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

-- Dump completed on 2023-11-09 16:29:31
