const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Verbindung zu Datenbank herstellen
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// MySQL connection öffnen
connection.connect((error) => {
  if (error) throw error;
  console.log("Erfolgreich mit DatenBank verbunden.");
});

module.exports = connection;
