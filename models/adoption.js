import mongoose from 'mongoose';

const adoptionSchema = mongoose.Schema({
    id :String,
    name :String,
    userMail :String,
    shelterName :String,
    image: String,
    description: String
});

const AdoptionModel = mongoose.model('AdoptionModel', adoptionSchema);

export default AdoptionModel;