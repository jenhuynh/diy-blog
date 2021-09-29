import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES($<name>) RETURNING *", { name });

//gets all data from db
export const getDiyPosts = () => db.any("SELECT * FROM diypost");

//gets a single post from db, for every intropolation (every pair of braces aka {postId}), each have keys, each intropolation substitute the value and goes to find value of id in db and put it in {postId}
export const getDiyPost = (postId) =>
  db.one("SELECT * FROM diypost WHERE id = ${postId}", { postId });

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
