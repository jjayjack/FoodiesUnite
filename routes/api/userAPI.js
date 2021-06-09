const router = require("express").Router();
const UserModel = require("../../models/user");
// const {  } = ("./restaurantApi");

router.post("/login", (req, res) => {
  UserModel.findOne({ email: req.body.email }).then((loggedInUser) => {
    loggedInUser.comparePassword(req.body.password, (err, isMatch) => {
      console.log("Errr, is match", err, isMatch);
      if (isMatch) {
        req.session.save(() => {
          req.session.logged_in = true;
          // who to save the information to logged in user
          req.session.user_id = loggedInUser._id;
          res.json({ user: loggedInUser, logged_in: true });
        });
      }
    });
  });
});

router.post("/signUp", (req, res) => {
  console.log("Sing up is happening!!!");
  UserModel.create({ email: req.body.email, password: req.body.password }).then(
    function (newUser) {
      console.log("new user we made!!", newUser);
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = newUser._id;
        res.json({ user: newUser, logged_in: true });
      });
    }
  );
});

router.get("/loginCheck", (req, res) => {
  res.json(req.session);
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
