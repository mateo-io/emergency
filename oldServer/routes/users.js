var express = require('express');
var router = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');

/* GET users listing. */

router.post('/register', (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) { handleResponse(res, 200, 'success'); }
    })(req, res, next);
  })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
