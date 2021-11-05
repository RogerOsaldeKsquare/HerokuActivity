// Modules
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

// Path to activities.json
const p = path.join(path.dirname(require.main.filename), 'data', 'activities.json');

module.exports = class Activity {
  constructor(data) {
    const { activity, author } = data;
    this.activity = activity;
    this.author = author;
    this.id = uuid.v4();
  }

  getId() {
    return this.id;
  }

  // We push a new activity to activities array and save
  save() {
    // We read the file everytime we need to modify it
    fs.readFile(p, (err, data) => {
      let activities = [];
      if (!err) {
        activities = JSON.parse(data);
      }
      activities.push(this);
      // Write the file
      fs.writeFile(p, JSON.stringify(activities), (err) => console.log(err));
    })
  }

  // We update data with the given one
  static update(activities) {
    fs.writeFile(p, JSON.stringify(activities), (err) => console.log(err));
  }

  // get and parse the data (async)
  static getAll(cb) {
    fs.readFile(p, (err, data) => {
      let activities = [];
      if (!err) {
        activities = JSON.parse(data);
      }
      // callback function when the data is ready
      cb(activities);
    });
  }
};
