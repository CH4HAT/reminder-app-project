let database = require("../database");

let authController = {
  register: (req, res) => {
    res.render("auth/register");
  },


  login: (req, res) => {
    res.render("auth/login");
  },


  registerSubmit: (req, res) => {
    let { email, password } = req.body;

  
    if (database[email]) {
      return res.status(400).send("User already exists");
    }

    
    database[email] = {
      email: email,
      password: password, 
    };

    res.redirect("/login");
  },

  
  loginSubmit: (req, res) => {
    let { email, password } = req.body;

    
    let user = database[email];
    if (!user || user.password !== password) {
      return res.status(400).send("Invalid email or password");
    }

    
    req.session.user = user;
    res.redirect("/reminders");
  },
};

module.exports = authController;
