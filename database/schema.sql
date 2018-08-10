DROP DATABASE IF EXISTS hero;
CREATE DATABASE hero; 

USE hero; 

CREATE TABLE listings (
  id serial NOT NULL PRIMARY KEY, 
  name TEXT
);



CREATE TABLE account(
 user_id serial PRIMARY KEY,
 username VARCHAR (50) UNIQUE NOT NULL,
 password VARCHAR (50) NOT NULL,
 email VARCHAR (355) UNIQUE NOT NULL,
 created_on TIMESTAMP NOT NULL,
 last_login TIMESTAMP
);

CREATE TABLE photos (
	id serial PRIMARY KEY NOT NULL, 
	description VARCHAR(255),
	url VARCHAR(200) NOT NULL,
  listing_id INT NOT NULL
);

-- {id: 1, description: xcv, url: xcvdsf.com, listing_id: 1}
