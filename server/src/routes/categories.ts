import express from 'express';
import { getAllCategories, insertOrUpdateCategory, removeCategory } from '../database/database';

export const router = express.Router();

router.get('/', async (req, res) => {
  const records = await getAllCategories();
  res.json(records);
});

router.post('/', async (req, res) => {
  const label = req.body.label;
  const color = req.body.color;

  const success = await insertOrUpdateCategory(label, color);
  if (success) {
    res.status(201).send({ message: 'Record was saved successfully!' });
  } else {
    res.status(500).send({ message: 'Error saving the record.' });
  }
});

router.delete('/', async (req, res) => {
  const label = req.body.label;
  
  const success = await removeCategory(label);
  if (success) {
    res.status(201).send({ message: 'Record was removed successfully!' });
  } else {
    res.status(500).send({ message: 'Error removing the record.' });
  }
});
