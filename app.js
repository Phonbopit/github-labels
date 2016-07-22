'use strict';

const gitLabel = require('git-label');
const { labels } = require('./labels.json');

require('dotenv').config();

const config = {
  api   : 'https://api.github.com',
  repo  : process.env.REPO,
  token : process.env.TOKEN
};

gitLabel.add(config, labels)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message


