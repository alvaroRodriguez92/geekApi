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
  `imagen` varchar(200) DEFAULT NULL,
  `nota` decimal(3,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videojuegos`
--

LOCK TABLES `videojuegos` WRITE;
/*!40000 ALTER TABLE `videojuegos` DISABLE KEYS */;
INSERT INTO `videojuegos` VALUES (1,'Amnesia Rebirth','2021-06-21',NULL,NULL,7.0),(2,'Control','2021-12-10',NULL,NULL,7.4),(3,'Crash bandicoot its about time','2021-06-26',NULL,NULL,7.1),(4,'Darkest dungeon','2021-05-07',NULL,NULL,7.6),(5,'Demon souls','2021-09-13',NULL,NULL,8.6),(6,'Doom eternal','2021-06-03',NULL,NULL,8.5),(7,'Final fantasy 7 remake','2021-03-28',NULL,NULL,8.1),(8,'Ghost runner','2021-02-02',NULL,NULL,8.0),(9,'Green hell','2021-01-21',NULL,NULL,6.5),(10,'GTFO','2021-12-28',NULL,NULL,7.1),(11,'Jedi fallen order','2021-06-16',NULL,NULL,7.2),(12,'Kena bridge of the spirits','2021-11-07',NULL,NULL,7.0),(13,'Little nightmares 2','2021-04-25',NULL,NULL,8.0),(14,'Lost castle','2021-06-03',NULL,NULL,7.0),(15,'Mass effect 1','2021-07-19',NULL,NULL,7.3),(16,'Mass effect 2','2021-09-27',NULL,NULL,7.9),(17,'Mass effect 3','2021-10-21',NULL,NULL,7.9),(18,'Metroid samus returns','2021-10-28',NULL,NULL,7.5),(19,'Metroid zero mission','2021-09-27',NULL,NULL,7.5),(20,'Nier replicant remake','2021-11-08',NULL,NULL,6.9),(21,'Observer system redux','2021-08-11',NULL,NULL,7.8),(22,'Outer wilds','2021-11-18',NULL,NULL,8.0),(23,'Path of exile','2021-05-13',NULL,NULL,6.0),(24,'Pokemon unite','2021-07-24',NULL,NULL,6.0),(25,'Pokeone','2021-05-13',NULL,NULL,7.0),(26,'Psychonauts 2','2021-09-16',NULL,NULL,7.9),(27,'Resident evil 8 village','2021-05-13',NULL,NULL,8.4),(28,'Temtem','2021-12-12',NULL,NULL,7.0),(29,'The beast inside','2021-02-07',NULL,NULL,7.6),(30,'The last of us 2','2021-02-07',NULL,NULL,9.2),(31,'Total war warhammer 2','2021-03-03',NULL,NULL,8.0),(32,'Xenoblade chronicles definitive edition','2021-12-28',NULL,NULL,6.5),(33,'Yuppie psycho','2021-11-18',NULL,NULL,7.0),(34,'Zelda skyward sword','2021-07-19',NULL,NULL,7.9),(35,'Zelda wind waker','2021-03-02',NULL,NULL,8.1),(36,'A plague tale Innocence','2020-09-16',NULL,NULL,7.1),(37,'Alien isolation','2020-08-14',NULL,NULL,8.8),(38,'Amnesia Dark Descent','2020-11-06',NULL,NULL,8.3),(39,'Amnesia Machine for pigs','2020-12-14',NULL,NULL,6.7),(40,'Among us','2020-09-16',NULL,NULL,6.9),(41,'Crash bandicoot insane trilogy','2020-08-18',NULL,NULL,7.3),(42,'Cuphead','2020-07-20',NULL,NULL,7.8),(43,'Days gone','2020-11-06',NULL,NULL,8.0),(44,'Death stranding','2020-05-14',NULL,NULL,8.2),(45,'Digimon world next order','2020-09-25',NULL,NULL,6.9),(46,'FFXIV Shadowbringers','2021-01-14',NULL,NULL,8.0),(47,'Genshin impact','2020-10-05',NULL,NULL,8.5),(48,'Gravity rush 2','2020-06-17',NULL,NULL,7.7),(49,'Grounded','2020-11-24',NULL,NULL,7.0),(50,'Hades','2020-12-17',NULL,NULL,7.8),(51,'Inside','2020-09-06',NULL,NULL,8.0),(70,'Journey','2020-07-20',NULL,NULL,7.0),(71,'Judgment','2020-06-29',NULL,NULL,7.4),(72,'Medievil remake','2020-06-18',NULL,NULL,7.7),(73,'Metro exodus','2020-05-14',NULL,NULL,8.0),(74,'Mortal shell','2020-09-06',NULL,NULL,7.0),(75,'Nioh 2','2020-12-09',NULL,NULL,8.2),(76,'Phasmofobia','2020-11-06',NULL,NULL,8.1),(77,'Ratchet and clank ps4','2020-11-26',NULL,NULL,8.0),(78,'RE Revelations','2020-03-19',NULL,NULL,7.0),(79,'Remnant from the ashes','2020-08-28',NULL,NULL,7.6),(80,'Resident evil 3 remake','2020-11-26',NULL,NULL,8.0),(81,'Resident evil 7','2020-06-18',NULL,NULL,8.4),(82,'Sea of thieves','2020-08-14',NULL,NULL,8.0),(83,'Shadow of the colossus remake','2020-06-18',NULL,NULL,8.3),(84,'Soma','2020-10-18',NULL,NULL,9.0),(85,'Super mario All star','2020-11-14',NULL,NULL,7.0),(86,'The forest','2020-08-14',NULL,NULL,8.8),(87,'The last of us','2020-01-22',NULL,NULL,8.9),(88,'Zelda links awakening remake','2020-07-30',NULL,NULL,8.9),(106,'Carrion','2022-06-14',NULL,NULL,6.8),(107,'Choo choo charles','2022-12-24',NULL,NULL,7.0),(108,'Crab game','2022-01-09',NULL,NULL,6.5),(109,'Digimon cyber sleuth','2022-08-15',NULL,NULL,8.5),(110,'Dying light','2022-02-03',NULL,NULL,7.1),(111,'Elden ring','2022-03-09',NULL,NULL,9.6),(112,'Ender lilies','2022-01-22',NULL,NULL,8.0),(113,'Evil west','2022-12-15',NULL,NULL,6.3),(114,'F.E.A.R','2022-06-05',NULL,NULL,7.3),(115,'Fall guys','2022-01-05',NULL,NULL,7.0),(116,'Final Fantasy VI','2022-04-03',NULL,NULL,8.0),(117,'Final fantasy Stranger Paradise','2022-04-19',NULL,NULL,7.2),(118,'Gears of wars 4','2022-08-15',NULL,NULL,7.6),(119,'Ghostwire Tokyo','2022-06-14',NULL,NULL,7.4),(120,'God of war Ragnarok','2022-11-23',NULL,NULL,9.0),(121,'Guardianes de la  galaxia','2022-09-28',NULL,NULL,8.0),(122,'Horizon forbidden west','2022-05-05',NULL,NULL,8.7),(123,'Inscryption','2022-02-05',NULL,NULL,7.7),(145,'Layers of fear','2022-08-18',NULL,NULL,6.7),(146,'Lost ark','2022-03-09',NULL,NULL,7.8),(147,'Neon white','2022-09-13',NULL,NULL,6.9),(148,'Overwatch 2','2022-10-24',NULL,NULL,6.0),(149,'Pokemon escarlata','2022-11-23',NULL,NULL,5.5),(150,'Pokemon leyendas arceus','2022-02-03',NULL,NULL,7.0),(151,'Rogue Legacy 2','2022-05-18',NULL,NULL,7.6),(152,'Scorn','2022-10-24',NULL,NULL,7.2),(153,'Ship of fools','2022-12-06',NULL,NULL,7.0),(154,'Sifu','2022-04-03',NULL,NULL,8.0),(155,'Signalis','2022-11-12',NULL,NULL,7.9),(156,'Silt','2022-06-20',NULL,NULL,7.1),(157,'Spirit of the island','2022-05-05',NULL,NULL,6.8),(158,'Stray','2022-11-07',NULL,NULL,7.4),(159,'The wine','2022-06-05',NULL,NULL,7.5),(160,'The witcher 3 Complete edition','2022-12-18',NULL,NULL,8.4),(161,'Tortugas ninja shedrers revenge','2022-06-29',NULL,NULL,7.1),(162,'Total war warhammer 3','2022-07-22',NULL,NULL,7.9),(163,'Tower of fantasy','2022-08-15',NULL,NULL,6.9),(164,'V rising','2022-05-25',NULL,NULL,7.0),(165,'Tunic','2022-09-14',NULL,NULL,8.9),(166,'What remains of edith finch','2022-12-22',NULL,NULL,7.8),(167,'Zelda Twilight princess','2022-08-15',NULL,NULL,8.0),(168,'A plague tale requiem','2023-08-12',NULL,NULL,8.0),(169,'Amnesia the bunker','2023-06-24',NULL,NULL,7.9),(170,'Back 4 blood','2023-04-25',NULL,NULL,7.3),(171,'Bramble the mountain king','2023-05-09',NULL,NULL,8.5),(172,'Dark souls 2','2023-07-30',NULL,NULL,8.1),(173,'Digimon survive','2023-07-08',NULL,NULL,6.0),(174,'Final fantasy XVI','2023-07-08',NULL,NULL,8.1),(175,'Fire emblem theree houses','2023-07-30',NULL,NULL,6.7),(176,'Honkai star rail','2023-04-25',NULL,NULL,7.0),(177,'Metal gear rising revengeance','2023-02-19',NULL,NULL,7.9),(178,'Metroid dread','2023-01-11',NULL,NULL,7.7),(179,'Monster hunter rise','2023-01-11',NULL,NULL,8.7),(180,'Nexomon extinction','2023-08-05',NULL,NULL,7.2),(181,'Octopath traveler','2023-09-06',NULL,NULL,8.0),(182,'Pokemon añil','2023-04-07',' ',NULL,7.5),(183,'Punishing Gray Raven','2023-08-12',NULL,NULL,7.9),(184,'Remnant 2','2023-07-30',NULL,NULL,7.8),(185,'Resident evil 4 Remake','2023-04-02',NULL,NULL,8.5),(186,'Tales of arise','2023-04-15',NULL,NULL,7.9),(187,'Thymesia','2023-09-17',NULL,NULL,7.5),(188,'Warhammer 40.000 Darktide','2023-04-25',NULL,NULL,7.2),(189,'Zelda tears of the Kingdom','2023-05-23','',NULL,9.2),(197,'Bloodborne','2020-01-17',NULL,NULL,9.9),(204,'Dead space remake','2023-11-09','Clasicazo de terror','deadspace.jpg',8.5);
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

-- Dump completed on 2023-11-09 16:29:31
