import Shelter from '../models/shelter.js';
import mongoose from 'mongoose';

export const getShelters = async (req, res) => {
  try {
    const Shelters = await Shelter.find();
    res.status(200).json(Shelters);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateShelter = async (req, res) => {
  const { id: _id } = req.params;
  const ex = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Nieprawidłowe dane');
  console.log(_id);
  const updatedEx = await Shelter.findByIdAndUpdate(_id, { ...ex, _id }, { new: true });

  res.json(updatedEx);
};