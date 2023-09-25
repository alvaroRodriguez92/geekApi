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
-- Table structure for table `videojuegos`
--

DROP TABLE IF EXISTS `videojuegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videojuegos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `imagen` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videojuegos`
--

LOCK TABLES `videojuegos` WRITE;
/*!40000 ALTER TABLE `videojuegos` DISABLE KEYS */;
INSERT INTO `videojuegos` VALUES (1,'Amnesia Rebirth','2021-06-21',NULL,NULL),(2,'Control','2021-12-10',NULL,NULL),(3,'Crash bandicoot its about time','2021-06-26',NULL,NULL),(4,'Darkest dungeon','2021-05-07',NULL,NULL),(5,'Demon souls','2021-09-13',NULL,NULL),(6,'Doom eternal','2021-06-03',NULL,NULL),(7,'Final fantasy 7 remake','2021-03-28',NULL,NULL),(8,'Ghost runner','2021-02-02',NULL,NULL),(9,'Green hell','2021-01-21',NULL,NULL),(10,'GTFO','2021-12-28',NULL,NULL),(11,'Jedi fallen order','2021-06-16',NULL,NULL),(12,'Kena bridge of the spirits','2021-11-07',NULL,NULL),(13,'Little nightmares 2','2021-04-25',NULL,NULL),(14,'Lost castle','2021-06-03',NULL,NULL),(15,'Mass effect 1','2021-07-19',NULL,NULL),(16,'Mass effect 2','2021-09-27',NULL,NULL),(17,'Mass effect 3','2021-10-21',NULL,NULL),(18,'Metroid samus returns','2021-10-28',NULL,NULL),(19,'Metroid zero mission','2021-09-27',NULL,NULL),(20,'Nier replicant remake','2021-11-08',NULL,NULL),(21,'Observer system redux','2021-08-11',NULL,NULL),(22,'Outer wilds','2021-11-18',NULL,NULL),(23,'Path of exile','2021-05-13',NULL,NULL),(24,'Pokemon unite','2021-07-24',NULL,NULL),(25,'Pokeone','2021-05-13',NULL,NULL),(26,'Psychonauts 2','2021-09-16',NULL,NULL),(27,'Resident evil 8 village','2021-05-13',NULL,NULL),(28,'Temtem','2021-12-12',NULL,NULL),(29,'The beast inside','2021-02-07',NULL,NULL),(30,'The last of us 2','2021-02-07',NULL,NULL),(31,'Total war warhammer 2','2021-03-03',NULL,NULL),(32,'Xenoblade chronicles definitive edition','2021-12-28',NULL,NULL),(33,'Yuppie psycho','2021-11-18',NULL,NULL),(34,'Zelda skyward sword','2021-07-19',NULL,NULL),(35,'Zelda wind waker','2021-03-02',NULL,NULL);
/*!40000 ALTER TABLE `videojuegos` ENABLE KEYS */;
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
