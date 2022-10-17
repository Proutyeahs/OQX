const rejectUnauthenticatedAdmin = (req, res, next) => {
  // check if user is admin
  if (req.user.admin) {
    // They were an admin! User may do the next thing
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticatedAdmin };
