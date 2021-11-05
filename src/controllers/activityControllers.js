// Models
const { Activity } = require('../models');

// Fecth all activities
const getAll = (req, res) => {
  Activity.getAll((activities) => {
    res.send(activities);
  });
};

// Get activity by id
const getById = (req, res) => {
  const { id } = req.params;
  // Read all activity
  Activity.getAll((activities) => {
    // Filter by id
    const activity = activities.find(ent => ent.id === id);

    if (activity) {
      res.send(activity);
    } else {
      res.status(404).send({
        message: 'Ups!!! Activity not found.',
      });
    }
  });
};

// Add new activity to activities
const createActivity = (req, res) => {
  const { body } = req;
  // Create new instance
  const newActivity = new Activity(body);
  // Save in db
  newActivity.save();
  res.send({
    message: 'Activity successfully created!!!',
    id: newActivity.getId(),
  });
};

// Update an existing activity
const updateActivity = (req, res) => {
  const { params: { id }, body } = req;
  // Read all activity
  Activity.getAll((activities) => {
    // Filter by id
    const activity = activities.find(ent => ent.id === id);

    if (activity) {
      Object.assign(activity, body);
      Activity.update(activities);
      res.send({
        message: 'Activity successfully updated!!!',
      });
    } else {
      res.status(404).send({
        message: 'Ups!!! Activity not found.',
      });
    }
  });
};

// Delete activity from activities
const deleteActivity = (req, res) => {
  const { id } = req.params;
  // Read all activity
  Activity.getAll((activities) => {
    // Filter by id
    const activityIdx = activities.findIndex(ent => ent.id === id);

    if (activityIdx !== -1) {
      activities.splice(activityIdx, 1);
      Activity.update(activities);
      res.send({
        message: 'Activity successfully deleted!!!',
      });
    } else {
      res.status(404).send({
        message: 'Ups!!! Activity not found.',
      });
    }
  });
};

module.exports = {
  getAll,
  getById,
  createActivity,
  updateActivity,
  deleteActivity,
};
