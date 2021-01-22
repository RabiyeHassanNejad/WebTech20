// Hier werden die Methoden aus controller ausgeführt

const sql = require("../database/db.js");

const StudentService = {
  create: async (newStudent, callback) => {
    sql.query("INSERT INTO students SET ?", newStudent, (err, res) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, { id: res.insertId, ...newStudent });
    });
  },
  findById: (studentId, callback) => {
    sql.query(
      `SELECT * FROM students WHERE id = ?`,
      [studentId],
      (err, res) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (res.length) {
          callback(null, res[0]);
          return;
        }
        // Student mit ID nicht gefunden
        callback({ kind: "not_found" }, null);
      }
    );
  },
  getAll: (callback) => {
    sql.query("SELECT * FROM students", (err, res) => {
      if (err) {
        callback(null, err);
        return;
      }
      callback(null, res);
    });
  },
  updateById: (id, student, callback) => {
    sql.query(
      "UPDATE students SET ? where id= ?",
      [student, id],
      (err, res) => {
        if (err) {
          console.log(err);

          callback(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          callback({ message: "student not_found" }, null);
          return;
        }
        callback(null, { id: id, ...student });
      }
    );
  },
  remove: (id, callback) => {
    sql.query("DELETE FROM students WHERE id = ?", id, (err, res) => {
      if (err) {
        callback(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        callback({ kind: "not_found" }, null);
        return;
      }
      callback(null, res);
    });
  },
  removeAll: (callback) => {
    sql.query("DELETE FROM students", (err, res) => {
      if (err) {
        callback(null, err);
        return;
      }
      callback(null, res);
    });
  },
};

module.exports = StudentService;
