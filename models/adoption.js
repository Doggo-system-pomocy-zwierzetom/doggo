import mongoose from 'mongoose';

const adoptionSchema = mongoose.Schema({
    id :String,
    name: { type: String, required: true },
    userMail :String,
    shelterName :{ type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

const AdoptionModel = mongoose.model('AdoptionModel', adoptionSchema);

export default AdoptionModel;