CREATE TABLE IF NOT EXISTS students(
	id serial,
  	name text NOT NULL,
  	dateOfBirth timestamp NOT NULL,
  	PRIMARY KEY(id)
);

INSERT INTO students(name, dateOfBirth) VALUES ('Roman Njoroge', '2024-03-6'), ('Anthony Mbeka', '2023-03-06');
