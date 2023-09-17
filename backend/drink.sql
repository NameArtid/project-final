/*
 Navicat Premium Data Transfer

 Source Server         : webpro
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : drink

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 22/07/2023 14:17:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `id` int NULL DEFAULT NULL,
  `descr` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `prine` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, 'coffe', 30);
INSERT INTO `menu` VALUES (2, 'tea', 40);
INSERT INTO `menu` VALUES (3, 'milk tea', 50);
INSERT INTO `menu` VALUES (4, 'green tea', 60);
INSERT INTO `menu` VALUES (5, 'mango juice', 20);
INSERT INTO `menu` VALUES (6, 'orange juice', 20);
INSERT INTO `menu` VALUES (7, 'mocha', 50);
INSERT INTO `menu` VALUES (8, 'americano', 50);

SET FOREIGN_KEY_CHECKS = 1;
