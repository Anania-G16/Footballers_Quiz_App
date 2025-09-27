import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const numberOfImages = 31;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
db.connect();
const used = [];

app.get("/choice", async (req, res) => {
  let num = Math.floor(Math.random() * numberOfImages) + 1;
  // while (used.includes(num)) {
  //   num = Math.floor(Math.random() * numberOfImages) + 1;
  // }
  // used.push(num);
  console.log(num);
  const answer = await db.query("SELECT name FROM player WHERE id = $1", [num]);
  const result = await db.query("SELECT name FROM player WHERE id != $1", [
    num,
  ]);

  const choices = [];
  choices.push(answer.rows[0].name);

  const usedNumbers = [];

  while (choices.length < 3) {
    const randNum = Math.floor(Math.random() * (numberOfImages - 1));
    if (usedNumbers.includes(randNum)) continue;
    usedNumbers.push(randNum);
    choices.push(result.rows[randNum].name);
  }
  res.json({ choices: choices, num: num });
  console.log(result.rows);
  console.log(choices);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/** 
 * the database will have a table of id and name 
    
 * the frontend will send a post request with
 * a unique number and expecting 
 * 3 random names, one of which is the corresponding
 * name for the id sent(the first one is always the 
 * right answer). 
 *  
 
 */
