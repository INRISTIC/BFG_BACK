import mongoose from "mongoose";

const RegulationSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  content_ua: {
    type: String,
    require: true,
  },
  content_en: {
    type: String,
    require: true,
  },
  content_ru: {
    type: String,
    require: true,
  }
}, {
  timestamps: true,
})

export default mongoose.model("Regulation", RegulationSchema)