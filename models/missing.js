import mongoose from 'mongoose';
const missingSchema = mongoose.Schema({
  id: String,
  title: { type: String, required:  true },
  image: { type: String, required:  true },
  creator: { type: String, required:  true },
  time: { type: Date, required:  true },
  description: { type: String, required:  true },
  place: { type: String, required:  true },
  longitude:  { type: Number, required:  true },
  latitude:  { type: Number, required:  true },
});

const MissingModel = mongoose.model('MissingModel', missingSchema);

export default MissingModel;
