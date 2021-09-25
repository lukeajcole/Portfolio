const router = require('express').Router();
const contentJSON = require('../setup/content.json');
const settingsJSON = require('../setup/settings.json');
const { Contacts, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', withAuth, (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/', withAuth, (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/admin/');
      return;
    }
  
    res.render('admin');
  });

module.exports = router;
