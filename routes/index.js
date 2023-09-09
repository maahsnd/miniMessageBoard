let messages = [
  {
    text: 'heyo',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'heyo world',
    user: 'Charlie',
    added: new Date()
  }
];

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.author,
    added: new Date()
  });
  res.redirect('/');
});

router.post;

module.exports = router;
