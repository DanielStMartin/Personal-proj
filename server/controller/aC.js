
module.exports = {
  // Very similar to how it should be set up but we are not using bcrypt, (HINT: )
  signIn: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.find_user(username).then(user => {
      if (user[0]) {
        if (password === user[0].password) {
          req.session.user = {
            username: user[0].username,
            user_id: user[0].id,
            first_name: user[0].first_name,
            last_name: user[0].last_name
          };
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send("password does not match");
        }
      } else {
        res.status(404).send("that username doesnt exist, please register");
      }
    });
  },

  register: (req, res) => {
    const db = req.app.get("db");
    const { username, password, full_name } = req.body;
    db.find_user(username).then(user => {
      if (user.length) {
        res.status(200).send("That User already exists");
      } else {
        db.create_user([username, password, full_name]).then(user => {
          req.session.user = {
            username: user[0].username,
            user_id: user[0].id,
            first_name: user[0].first_name,
            last_name: user[0].last_name
          };
          res.status(200).send(req.session.user);
        });
      }
    });
  }
};
