CREATE DATABASE todo_basic;

--\c into database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);