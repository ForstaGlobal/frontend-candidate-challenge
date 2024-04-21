import express from 'express';
import { getAllTasks, insertOrUpdateTask, removeTask } from '../database/database';

export const router = express.Router();

router.get('/', async (req, res) => {
  const records = await getAllTasks();
  res.json(records);
});

router.post('/', async (req, res) => {
  const id = req.body.id;
  const category = req.body.category;
  const text = req.body.text;
  const time = req.body.time;
  const done = req.body.done;

  const success = await insertOrUpdateTask(id, category, text, time, done);
  if (success) {
    res.status(201).send({ message: 'Record was saved successfully!' });
  } else {
    res.status(500).send({ message: 'Error saving the record.' });
  }
});

router.delete('/', async (req, res) => {
  const id = req.body.id;
  
  const success = await removeTask(id);
  if (success) {
    res.status(201).send({ message: 'Record was removed successfully!' });
  } else {
    res.status(500).send({ message: 'Error removing the record.' });
  }
});
