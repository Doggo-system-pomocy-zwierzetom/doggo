import mongoose from 'mongoose';
import MissingModel from '../models/missing.js';

export const getMissings = async (req, res) => {
  try {
    const MissingModels = await MissingModel.find();
    res.status(200).json(MissingModels);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMissing = async (req, res) => {
  const ex = req.body;
  const newEx = new MissingModel(ex);
  try {
    await newEx.save();
    res.status(201).json(newEx);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMissing = async (req, res) => {
  const { id: _id } = req.params;
  const ex = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Nieprawidłowe dane');

  const updatedEx = await MissingModel.findByIdAndUpdate(_id, { ...ex, _id }, { new: true });

  res.json(updatedEx);
};

export const deleteMissing = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Nieprawidłowe dane');

  const deleteEx = await MissingModel.findByIdAndRemove(_id);
  res.json({ message: 'Zaginięcie usunięte' });
};
