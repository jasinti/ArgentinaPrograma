CREATE DATABASE  IF NOT EXISTS `negocio` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */;
USE `negocio`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: negocio
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `idcliente` int(10) NOT NULL,
  `nombre` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `apellido` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `direccion` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `telefono` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `sexo` enum('hombre','mujer') COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'juan','perez','ecuador','97878','juanperez@hotmail.com',434587,'hombre'),(2,'maria','hernandez','venezuela','1231232','mariah@hotmail.com',4312317,'mujer'),(3,'juan','saenz','españa','8767687','juans@hotmail.com',2090343,'hombre'),(4,'daniela','uribe','españa','4365678','duribe@hotmail.com',3243554,'mujer'),(5,'juan','ochoa','ecuador','923843734','juano@hotmail.com',213409,'hombre'),(6,'manuel','carrasquel','peru','230934','manuelc@hotmail.com',1309545,'hombre'),(7,'daniela','guzman','españa','32654535','dguzman@hotmail.com',3243554,'mujer'),(8,'pablo','abal','argentina','656877687','pabloa@yahoo.com',10238437,'hombre'),(9,'adriana','hernandez','ecuador','543876784','adrianah@yahoo.com',1309545,'mujer');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facturas` (
  `tipo` char(1) NOT NULL,
  `numero` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `monto` float DEFAULT NULL,
  `idcliente` int(10) NOT NULL AUTO_INCREMENT,
  `idproducto` int(11) NOT NULL,
  PRIMARY KEY (`tipo`,`numero`),
  KEY `fk_facturas_1_idx` (`idcliente`),
  KEY `fk_productos_idx` (`idproducto`),
  CONSTRAINT `fk_clientes` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
INSERT INTO `facturas` VALUES ('A',1,'2017-10-20',2000,1,4),('A',3,'2017-02-03',2300,2,2),('A',4,'2018-01-21',2000,2,1),('A',5,'2012-12-02',1800,2,4),('A',6,'2017-08-21',2200,2,1),('A',9,'2016-01-28',1200,4,1),('A',10,'2017-07-09',2600,8,2),('B',2,'2015-11-01',2000,1,3),('B',7,'2016-03-01',1800,3,3),('B',8,'2015-06-17',1500,1,5);
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `idproducto` int(11) NOT NULL,
  `articulo` varchar(45) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `marca` varchar(45) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `talle` char(1) DEFAULT NULL,
  PRIMARY KEY (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'vestido',123.4,'MKF',10,'verde','2'),(2,'pantalon',209.4,'kosiuko',20,'azul','1'),(3,'vestido',123.4,'MKF',10,'verde','2'),(4,'pantalon',209.4,'kosiuko',20,'azul','8'),(5,'camisa',100.4,'zara',20,'rosa','1'),(6,'vestido',200.2,'muak',10,'morado','2'),(7,'camisa',300.1,'MKF',20,'azul','5'),(8,'gorra',80.8,'retro republic',10,'azul','1'),(9,'pantalon',160.8,'bershka',10,'marron','4'),(10,'gorra',78.9,'kosiuko',5,'negro','2');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prueba`
--

DROP TABLE IF EXISTS `prueba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prueba` (
  `idprueba` int(11) NOT NULL,
  `nombre` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `edad` int(2) DEFAULT NULL,
  `sexo` char(1) COLLATE latin1_spanish_ci DEFAULT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`idprueba`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prueba`
--

LOCK TABLES `prueba` WRITE;
/*!40000 ALTER TABLE `prueba` DISABLE KEYS */;
/*!40000 ALTER TABLE `prueba` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-20 21:50:47
