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
-- Table structure for table `pendientes`
--

DROP TABLE IF EXISTS `pendientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pendientes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `peliculas` varchar(200) DEFAULT NULL,
  `anime` varchar(200) DEFAULT NULL,
  `series` varchar(200) DEFAULT NULL,
  `videojuegos` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pendientes`
--

LOCK TABLES `pendientes` WRITE;
/*!40000 ALTER TABLE `pendientes` DISABLE KEYS */;
INSERT INTO `pendientes` VALUES (1,NULL,'Pluto',NULL,NULL),(2,'Misterio en venecia',NULL,NULL,NULL),(4,'Super mario',NULL,NULL,NULL),(5,'Indiana jones y el dial del destino',NULL,NULL,NULL),(6,'Dungeons and dragons',NULL,NULL,NULL),(7,NULL,'Slam dunk',NULL,NULL),(8,NULL,'Onizuka teacher',NULL,NULL),(9,NULL,'Mushoku Tensei',NULL,NULL),(10,NULL,'Rurouni kenshin',NULL,NULL),(14,NULL,NULL,'Love Death and Robots (temp.3)',NULL),(15,NULL,NULL,NULL,'Cyberpunk 2027'),(16,NULL,NULL,NULL,'Sea of stars'),(17,NULL,NULL,NULL,'Atomic heart'),(18,NULL,NULL,NULL,'Lies of p'),(19,NULL,NULL,NULL,'Starfield'),(20,NULL,NULL,NULL,'Hi-fi rush'),(21,NULL,NULL,NULL,'Crisis core'),(24,NULL,'Onimusha',NULL,NULL),(40,NULL,NULL,'Sucession',NULL),(41,NULL,NULL,'Parks and recreation',NULL),(42,'Barbie',NULL,NULL,NULL),(43,NULL,NULL,'Planeta prehistorico (docu)',NULL),(54,NULL,NULL,'La caida de la casa usher',NULL);
/*!40000 ALTER TABLE `pendientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-09 16:29:32
