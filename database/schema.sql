DROP DATABASE IF EXISTS hero;
CREATE DATABASE hero; 

USE hero; 

-- CREATE TABLE account(
--  user_id serial PRIMARY KEY,
--  username VARCHAR (50) UNIQUE NOT NULL,
--  password VARCHAR (50) NOT NULL,
--  email VARCHAR (355) UNIQUE NOT NULL,
--  created_on TIMESTAMP NOT NULL,
--  last_login TIMESTAMP
-- );

CREATE TABLE listings (
  id serial PRIMARY KEY, 
  name TEXT
);

CREATE TABLE photos(
	id int, 
	description text,
	url text,
  listing_id INT,
  PRIMARY KEY (listing_id, id)
);

CREATE TABLE test(
	id list<int>, 
	description text,
	url text,
  listing_id INT,
  PRIMARY KEY (listing_id, id)
);

-- {id: 1, description: xcv, url: xcvdsf.com, listing_id: 1}

copy listings from '/Users/ringosanchez/Desktop/airDnD/sampleData.csv' delimiter ',' csv header;
COPY listings (id, name) from '/Users/ringosanchez/Desktop/airDnD/sampleData.csv' with delimiter = ',' and header = 'true';

copy photos from '/Users/ringosanchez/Desktop/airDnD/photoData01.csv' delimiter ',' csv header;
COPY photos (id, description, url, listing_id) from '/Users/ringosanchez/Desktop/airDnD/photoData01.csv' with delimiter = ',' and header = 'true';

COPY test (id, description, url, listing_id) from '/Users/ringosanchez/Desktop/airDnD/photoData01.csv' with delimiter = ',' and header = 'true';


CREATE INDEX list_idx
ON airdndphotos.test (listing_id);

cassandra-loader -f /Users/ringosanchez/Desktop/airDnD/photoData01.csv -host 9042 "airdndphotos.photos(id, description, url, listing_id)"

CREATE KEYSPACE airdndphotos
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1}