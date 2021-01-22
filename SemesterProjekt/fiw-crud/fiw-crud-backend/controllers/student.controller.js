const StudentService = require("../services/student.service.js");
const StudentController = {
  // API alle studenten
  findAll: (req, res) => {
    StudentService.getAll((err, students) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while get the Students data",
        });
      else res.json(students);
    });
  },
  // API neuen Studi anlegen
  create: (req, res) => {
    // Prüfen der Anfrage (ist Anfrage korrekt oder nicht)
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }
    const student = { ...req.body }; //wenn Freigabe, neuen Studi anlegen
    StudentService.create(student, (err, result) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Student.",
        });
      else res.json(result);
    });
  },
  // API daten löschen
  delete: (req, res) => {
    StudentService.remove(req.params.studentId, (err, result) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while delete the Student",
        });
      else res.json(result);
    });
  },

  // API daten updaten
  update: (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }
    const newStudentData = { ...req.body };
    StudentService.updateById(
      req.params.studentId,
      newStudentData,
      (err, result) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while update the Student",
          });
        else res.json(result);
      }
    );
  },
  // API zur Suche nach studentID
  findOne: (req, res) => {
    StudentService.findById(req.params.studentId, (err, student) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while get the Student data",
        });
      else res.json(student);
    });
  },
};

module.exports = StudentController;
