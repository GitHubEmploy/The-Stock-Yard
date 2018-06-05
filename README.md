# Project-2
Group project #2 for GT Coding Bootcamp


Project Name: The Stock Yard

Our Team: -Anthony -Jason -Michael

What is this?? The idea behind this is to create a stock "wallet" so to speak. It allows the user to input their stock info and quickly see values by incorporating a stock API that calculates the quantity the user inputs by multiplying that against the last closing price. The info is displayed visually on a graph using chart.js.

Project Outline: LandingPage - Login Page (user enters user name and password). This info is captured using an onclick function and inserted into an sql table (POST method) - Holdings page (user inputs their stock ticker symbol and quantity). This info is also captured by an onclick function and feeds the info into another table in sql (POST method). Once the add button is clicked, all holdings (stock and qty) is shown towards the bottom of the page (GET method). We capture the closing price from a stock api which calculates the stock "value". Data is displayed both visually in a graph and in a table. 

APIs and stuff: API - IEX API (stocks), Bootstrap, java script, ajax, HTML, API routing, models to setup sql tables, handlebars, CSS, charts.js, MySQL for datastorage, Unsplash for the pics,  jQuery for DOM manipulation, heroku for publishing, GitKraken for version control and JAWSDB for virtual database.

Who is doing what? 

Anthony -Design/CSS/HTML landing page, IEX API, Models  

Jason -Design/CSS/HTML second page, JAWSDB, MySQL

Michael -create data chart using Charts.js/

All: Peer programming for functionality 