use gc200329020;

drop table jupiter;
CREATE TABLE jupiter (
person_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
username VARCHAR(50) NOT NULL,
firstName VARCHAR(50) NOT NULL,
lastName VARCHAR (50) NOT NULL,
address VARCHAR (90) NOT NULL,
city VARCHAR (50) NOT NULL,
password CHAR(128) NOT NULL);


select * from gc200329020.jupiter;

ALTER TABLE jupiter
ADD COLUMN coverImage VARCHAR(255),
add column title varchar(100),
add column content varchar(500) ;

use gc200329020;

drop table earth;
CREATE TABLE earth (
page_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
title VARCHAR(50) NOT NULL,
content VARCHAR(500) NOT NULL);

select * from earth;


