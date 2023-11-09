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
-- Table structure for table `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `nota` decimal(3,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas`
--

LOCK TABLES `peliculas` WRITE;
/*!40000 ALTER TABLE `peliculas` DISABLE KEYS */;
INSERT INTO `peliculas` VALUES (1,'El piloto','2023-09-23',NULL,NULL,7.0),(2,'Mision imposible: Sentencia Mortal','2023-08-16',NULL,NULL,8.2),(3,'Llaman a la puerta','2023-02-11',NULL,NULL,7.8),(4,'Guardianes de la galaxia vol.3','2023-09-02',NULL,NULL,8.4),(5,'John wick 4','2023-04-15',NULL,NULL,9.0),(6,'Evil Dead Rise','2023-08-01',NULL,NULL,7.0),(7,'El menú','2023-07-28',NULL,NULL,7.2),(8,'Top gun Maverick','2022-06-14',NULL,NULL,8.5),(9,'The batman','2022-03-20',NULL,NULL,8.4),(10,'El gato con botas: El último deseo','2023-01-16',NULL,NULL,8.6),(11,'Uncharted','2023-07-09',NULL,NULL,7.1),(12,'Barbarian','2023-02-21',NULL,NULL,8.1),(13,'NOP','2022-08-10',NULL,NULL,8.0),(14,'Smile','2022-11-28',NULL,NULL,7.4),(15,'El proyecto Adam','2022-04-26',NULL,NULL,7.0),(16,'Bullet Train','2022-08-30',NULL,NULL,8.7),(17,'El hombre del norte','2022-05-16',NULL,NULL,8.0),(18,'Viaje al paraiso','2023-01-22',NULL,NULL,7.6),(19,'No te preocupes querida','2023-02-26',NULL,NULL,8.1),(20,'Pequeños detalles','2021-02-19',NULL,NULL,7.0),(21,'Expediente warren: Obligado por el demonio ','2021-06-03',NULL,NULL,7.3),(22,'El callejon de las almas perdidas','2021-12-27',NULL,NULL,7.2),(23,'Despierta la furia','2021-07-08',NULL,NULL,7.6),(24,'La liga de la justicia de Zack Snyder','2021-03-25',NULL,NULL,9.1),(25,'Godzilla VS Kong','2021-05-04',NULL,NULL,6.5),(26,'Jungle Cruise','2022-03-20',NULL,NULL,6.9),(27,'Dune','2022-11-01',NULL,NULL,8.8),(28,'Finch','2021-11-21',NULL,NULL,7.0),(29,'Spiderman: No way home','2021-12-18',NULL,NULL,7.5),(30,'Klaus','2021-12-23',NULL,NULL,9.3),(31,'Shang-Chi y la leyenda de los Diez Anillos','2021-10-05',NULL,NULL,6.9),(32,'No mires arriba','2021-12-07',NULL,NULL,8.8),(33,'Maixabel','2022-04-02',NULL,NULL,7.9),(34,'Ultima noche en el soho','2021-11-06',NULL,NULL,8.0),(35,'Casa ajena','2021-01-09',NULL,NULL,7.0),(36,'Tiempo','2022-07-11',NULL,NULL,6.9),(106,'Batman (Nolan) ','2021-02-14','',NULL,9.7),(107,'Señor de los anillos','2021-05-21',NULL,NULL,9.6);
/*!40000 ALTER TABLE `peliculas` ENABLE KEYS */;
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
