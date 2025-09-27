Footballers Quiz Web App

A fun and interactive quiz app to test your knowledge of famous footballers’ names. Built with Vite, React, and Express, with a PostgreSQL backend.

## Features

- Multiple-choice quiz questions about football players
- Tracks your score and progress
- Lightweight backend for storing questions and scores

## Tech Stack

- **Frontend:** React + Vite  
- **Backend:** Express.js  
- **Database:** PostgreSQL  
- **Styling:** CSS 

---

## Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL installed locally or via a cloud service

### Installation

1. Clone the repo
2. Install dependencies
   npm install
3. Install the dotenv package and under your .env file enter these.
  DB_USER=your_db_username
  DB_PASSWORD=your_db_password
  DB_NAME=football_quiz
4. Run the postgres commands under the query.sql file inside your pgAdmin to create the tables and add the info.

#This project can be scaled up by just adding players images in your file by naming them (p1, p2, p3 ...) where the numbers are the ids you give for the players in the postgres database
then, in your database, add the values into the table by giving them id(which you named the player image) and under the name column, add the player name. Done!

