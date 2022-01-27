import mongoose from "mongoose";

const shelterSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  NIP: { type: String, required: true },
  food: { type: String },
  equipment: { type: String },
});

export default mongoose.model("Shelter", shelterSchema);