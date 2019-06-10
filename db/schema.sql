-- Drop the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Create the "burgers_db" database --
CREATE DATABASE burgers_db;

-- Make it so all of the following code will affect burgers_db --
USE burgers_db;

-- Create the table "burgers" within burgers_db --
CREATE TABLE burgers (
  -- Make a string column called "burger_name" which cannot contain null --
  burger_name VARCHAR(30) NOT NULL,
  -- Make a boolean column called "devoured" which is default false --
  devoured BOOLEAN DEFAULT false,
 -- Create a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 -- Make "id" be the primary key --
  PRIMARY KEY (id)
);