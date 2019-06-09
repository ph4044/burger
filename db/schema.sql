-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "animals_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect animals_db --
USE burgers_db;

-- Creates the table "people" within animals_db --
CREATE TABLE burgers (
  -- Makes a string column called "burger-name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "devoured" which is default false --
  devoured BOOLEAN DEFAULT false,
 -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
);