import  mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productOrder: {
      type: Number,
      required: true,
    },
    meta: {
      type: Object,
      required: true,
    },
    sizes: [],
    colors: [],
    pdf: [],
    videos: [],
    images: [],
    category_id: {
      type: String,
      required: true,
    },
    informationProduct: {
      type: String,
      required: true,
    },
    specificationProduct: {
      type: String,
      required: true,
    }
  },
  { timestamps: true },
);

export default mongoose.model('Product', ProductSchema, 'Product');
