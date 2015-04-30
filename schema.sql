-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NOT NULL DEFAULT 'NULL',
  `hashed_password` VARCHAR NOT NULL DEFAULT 'NULL',
  `email` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'events'
-- 
-- ---

DROP TABLE IF EXISTS `events`;
    
CREATE TABLE `events` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `event_info` MEDIUMTEXT NULL DEFAULT NULL,
  `event_title` VARCHAR NOT NULL DEFAULT 'NULL',
  `event_category` VARCHAR NULL DEFAULT NULL,
  `event_date` DATE NULL DEFAULT NULL,
  `event_image` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_events'
-- 
-- ---

DROP TABLE IF EXISTS `users_events`;
    
CREATE TABLE `users_events` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `users_id` INTEGER NULL DEFAULT NULL,
  `event_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `users_id`, `event_id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `users` ADD FOREIGN KEY (id) REFERENCES `users_events` (`users_id`);
ALTER TABLE `events` ADD FOREIGN KEY (id) REFERENCES `users_events` (`event_id`);
