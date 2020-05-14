DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL, 
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN 
);


Error Code: 1075. Incorrect table definition; there can be only one auto column and it must be defined as a key
