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
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `nota` decimal(3,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'From ','2023-09-25','Una especie de Lost con elementos de terror.',NULL,8.0),(2,'La casa del dragón','2023-04-12','Como una telenovela venezolana pero con dragones. Mola.',NULL,8.3),(3,'Altered Carbon','2023-08-03','Ambientación cyberpunk bien hecha. La segunda temporada bastante pocha.',NULL,7.9),(4,'One piece','2023-09-11','Bastante entretenida, para sorpresa de todos.',NULL,8.0),(5,'The continental','2023-09-23','Ostias como panes. Está \"guay\".',NULL,7.5),(6,'The last of us','2023-02-06','El juego hecho en serie. Buenisima.',NULL,9.2),(7,'Avatar The last Airbender','2023-06-18',NULL,NULL,8.9),(8,'Los anillos de poder','2022-11-29','Un minuto de silencio por los 700 millones que ha costado hacer esta serie.',NULL,6.5),(9,'The boys','2022-08-02',NULL,NULL,9.0),(10,'The office','2022-05-08',NULL,NULL,9.1),(11,'The sandman','2022-08-29',NULL,NULL,8.9),(12,'The witcher','2021-02-25',NULL,NULL,7.0),(13,'True detective','2021-01-09',NULL,NULL,8.0),(14,'1899','2022-10-21',NULL,NULL,7.0),(15,'Stranger things','2021-07-02',NULL,NULL,9.0),(16,'Arcane','2021-12-19',NULL,NULL,9.4),(17,'La chica de nieve','2023-02-01','Rollo macatuno.',NULL,7.3),(18,'La casa de papel','2021-12-04',NULL,NULL,7.4),(19,'El juego del calamar','2021-10-17',NULL,NULL,9.0),(20,'Alice in borderland','2021-06-10',NULL,NULL,6.9),(21,'Peaky blinders','2022-04-03',NULL,NULL,9.6),(22,'Rick and Morty','2022-05-20',NULL,NULL,8.6),(23,'Gambito de dama','2021-03-11',NULL,NULL,8.7);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-09 16:29:30
