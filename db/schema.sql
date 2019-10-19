DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
   id INT (3) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR(30) NULL,
   devoured BOOLEAN DEFAULT true,
   PRIMARY KEY (id)
);

SELECT * FROM burgers;