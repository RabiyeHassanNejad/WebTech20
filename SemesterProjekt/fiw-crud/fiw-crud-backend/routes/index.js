module.exports = (app) => {
  const studentController = require("../controllers/student.controller.js");

  // Neue Studentin anlegen
  app.post("/students", studentController.create);
  // Liste durchsuchen - wiedergabe aller Studierenden
  app.get("/students", studentController.findAll);

  // Suche nach StudiId- wiedergabe einer Studentin
  app.get("/students/:studentId", studentController.findOne);

  // Update der studentenId
  app.put("/students/:studentId", studentController.update);

  // Delete der studentId
  app.delete("/students/:studentId", studentController.delete);

  // Delete a Student
  //app.delete("/students", studentController.deleteAll);
};
