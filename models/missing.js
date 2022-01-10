import mongoose from 'mongoose';

const missingSchema = mongoose.Schema({
  id: String,
  title: String,
  image: String,
  creator: String,
  time: Date,
  description: String,
  place: String,
  longtitude: Number, //moze nie dzialac
  latitude: Number,
});

const MissingModel = mongoose.model('MissingModel', missingSchema);

export default MissingModel;
