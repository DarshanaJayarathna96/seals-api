import  mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    specificationCategory: {
      type: String,
      required: true,
    },
    meta: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Category', CategorySchema, 'Category');
