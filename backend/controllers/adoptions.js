import mongoose from 'mongoose';
import AdoptionModel from '../models/adoption.js';

export const getAdoptions = async (req, res) =>{
    try {
        const AdoptionModels = await AdoptionModel.find();
        res.status(200).json(AdoptionModels);

    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createAdoption = async (req, res) =>{
    const ex = req.body;
    const newEx = new AdoptionModel({ex});
    try{
        await newEx.save();
        res.status(201).json(newEx);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateAdoption = async (req, res) =>{
    const { id: _id } = req.params;
    const ex = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Nieprawidłowe dane");
    
    const updatedEx = await AdoptionModel.findByIdAndUpdate(_id, {...ex,_id}, {new:true});
    
    res.json(updatedEx);
}

export const deleteAdoption = async (req, res) =>{
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Nieprawidłowe dane");

    const deleteEx = await AdoptionModel.findByIdAndRemove(_id);
    res.json({message: 'Adopcja usunięte'});
}