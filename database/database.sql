CREATE DATABASE IF NOT EXISTS `ng_games_db`;
USE ng_games_db;
CREATE TABLE IF NOT EXISTS `games` (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(180) NOT NULL,
    description varchar(255) NOT NULL,
    image varchar(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
DESCRIBE games;