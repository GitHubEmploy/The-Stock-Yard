CREATE DATABASE stockDB;
USE stockDB;

CREATE TABLE user (
    user_name TEXT,
    password TEXT
);    

CREATE TABLE stocks (
    symbol TEXT,
    stock_name TEXT,
    qty INT
);
