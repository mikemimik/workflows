'use strict';

const fs = require('fs');

const tasks = fs.readdirSync(`${__dirname}/tasks`, 'utf8');

module.exports = (app) => {
  tasks.forEach((task) => {
    task(app);
  });
};
