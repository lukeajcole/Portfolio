const router = require('express').Router();
const contentJSON = require('../setup/content.json');
const settingsJSON = require('../setup/settings.json');

router.get('/', async (req, res) => {
  try {

    // const content = JSON.stringify(contentJSON);
    // console.log(contentJSON)
    res.render('onepage', {contentJSON, settingsJSON});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
