const mysql = require("mysql");
const dbConfig = require("../fiw-crud-backend/config/db.config.js");

const students = [
  {
    firstname: "Amilia",
    lastname: "Erle",
    email: "amilia.erle@htw-berlin.de",
    matrNr:"0575034"
  },
  {
    firstname: "Anna",
    lastname: "Sakrenko",
    email: "anna.sakrenko@htw-berlin.de",
    matrNr:"0504723"
  },
  {
    firstname: "Babet",
    lastname: "Reinhold",
    email: "abet.reinhold@htw-berlin.de",
    matrNr:"0565934"
  },
  {
    firstname: "Carla",
    lastname: "Fourelle",
    email: "carla.fourelle@htw-berlin.de",
    matrNr:"05673942"
  },
  {
    firstname: "Chirin",
    lastname: "Yenkranghi",
    email: "chirin.yenkranghi@htw-berlin.de",
    matrNr:"0535687"
  },
  {
    firstname: "Celine",
    lastname: "Robin",
    email: "celine.robin@htw-berlin.de",
    matrNr:"0575357"
  },
  {
    firstname: "Eda",
    lastname: "Gündan",
    email: "eda.guendan @htw-berlin.de",
    matrNr:"0529345"
  },
  {
    firstname: "Fatima",
    lastname: "Aslan",
    email: "fatima.aslan@htw-berlin.de",
    matrNr:"0567954"
  },
  {
    firstname: "Helena",
    lastname: "Müller",
    email: "elena.mueller@htw-berlin.de",
    matrNr:"0568329"
  },
  {
    firstname: "Maria",
    lastname: "Rostova",
    email: "maria.rostova@htw-berlin.de",
    matrNr:"0573809"
  },
  {
    firstname: "Marie Kristin",
    lastname: "Welsch",
    email: "mariekristin.welsch@htw-berlin.de",
    matrNr:"0545765"
  },
  {
    firstname: "Nicole",
    lastname: "Hoffmann",
    email: "nicole.hoffmann @htw-berlin.de",
    matrNr:"0556752"
  },
  {
    firstname: "Trang",
    lastname: "Ha Duong",
    email: "trang.haduong @htw-berlin.de",
    matrNr:"0582934"
  },
  {
    firstname: "Yasmin",
    lastname: "Polath",
    email: "yasmin.polath@htw-berlin.de",
    matrNr:"0509845"
  },
];

// Mit Datenbank verbinden
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE IF  EXISTS students"; //wenn eine vorhanden, loeschen u ersetzten
  connection.query(sql, function (err) {
    if (err) throw err;
    console.log("DROP Students Table");
    sql =
      "CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, matrNr INT, firstname VARCHAR(255), lastname VARCHAR(255),email VARCHAR(255),photo LONGTEXT,task1 tinyint, task2 tinyint,task3 tinyint, task4 tinyint, task5 tinyint, task6 tinyint, task7 tinyint, task8 tinyint)";
    connection.query(sql, function (err) {
      if (err) throw err;
      console.log("Students Table created");

      //Neue Tabelle wird befüllt
      students.forEach((student, index) => {
        var sql = "INSERT INTO students SET ?";
        connection.query(sql, [student], function (err) {
          if (err) throw err;
          console.log(`Student ${student.firstname} was inserted..`);
          if (index === students.length - 1) {
            console.log(`DONE!`);
            process.exit();
          }
        });
      });
    });
  });
});
