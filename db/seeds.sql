-- Make it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates new rows containing data in all named columns --
INSERT INTO burgers (burger_name, devoured)
VALUES ("Baconator", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Mushroom Swiss", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Donut Burger", FALSE);