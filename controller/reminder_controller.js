let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToFind = req.params.id; 
    let reminder = database.cindy.reminders.find((reminder) => {
      return reminder.id == reminderToFind;
    });

    if (reminder) {
      reminder.title = req.body.title || reminder.title;
      reminder.description = req.body.description || reminder.description;
      reminder.completed = req.body.completed ?? reminder.completed; 
      res.redirect("/reminders"); 
    } else {
      res.status(404).send("Reminder not found");
    }
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id; 
    let index = database.cindy.reminders.findIndex((reminder) => {
      return reminder.id == reminderToFind;
    });

    if (index !== -1) {
      database.cindy.reminders.splice(index, 1); 
      res.redirect("/reminders"); 
    } else {
      res.status(404).send("Reminder not found");
    }
  },
};

module.exports = remindersController;
