CREATE DATABASE stockDB;
USE stockDB;

CREATE TABLE userName (
    user_name TEXT,
    password TEXT
);    


CREATE TABLE stocks (
    symbol TEXT,
    stock_name TEXT,
    qty INT
);

CREATE TABLE stock_list (
    symbol TEXT,
    company TEXT
);