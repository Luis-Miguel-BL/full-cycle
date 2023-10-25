import mysql, { Connection }  from "mysql2";

const dbConfig =  {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
}

export default mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

export function setupDB(db: Connection) {
    db.query("CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL)")
    console.log("table created successfully")
}