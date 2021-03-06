import User from '../models/user.model';


// get all users
function list(req, res) {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        type: 'error',
        message: 'Error Fetching User',
      });
    }
    if (users.length === 0) {
      return res.status(400).json({
        data: null,
        message: 'no user in database',
      });
    }
    return res.json({
      status: 'success',
      data: users,
      message: 'list of users',
    });
  });
}

// save user to the database
function save(req, res) {
  const { username, email, name } = req.body;
  const modified_on = new Date();
  const _user = new User({
    username,
    email,
    name,
    modified_on

  });

  _user.save((err, user) => {
    if (err) {
      return res.json({
        message: 'error saving user',
        error: err,
      });
    }
    return res.json({
      message: 'successfully saved user to the database',
      data: user,
    });
  });
}
// get one records provided that the id of user
function findOne(req, res) {
  const id = req.params.user_id;
  User.findById(id, (err, user) => {
    if (err) {
      return res.json({
        status: 'error',
        message: `error getting user with id ${req.params.id}`,
      });
    }

    return res.json({
      status: 'success',
      data: user,
      message: 'user details',
    });
  });
}
// remove one record provided that the id of user
function remove(req, res) {
  User.remove(({ id: req.params.id }), (err, user) => {
    if (err) {
      return res.json({
        status: 'error',
        message: `error deleting user with id ${req.params.id}`,
      });
    }
    return res.json({
      status: 'success',
      data: user,
      message: `User successfully deleted with id ${req.params.id}`,
    });
  });
}
export { list, save, findOne, remove };
