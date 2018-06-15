'use strict';

const fs = require('fs');

const files = fs.readdirSync(`${__dirname}/tasks`, 'utf8');

const tasks = files.reduce((acc, file) => {
  const filename = file.split('.')[0];
  acc[filename] = require(`./tasks/${filename}`);
  return acc;
}, {});

module.exports = (app) => {
  Object.keys(tasks).forEach((task) => {
    tasks[task](app);
  });
};
