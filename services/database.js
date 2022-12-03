// // const { createConnection } = require("mysql");
// // const { config } = require("./config.js");
// // const {
// //   getStorage,
// //   ref,
// //   uploadString,
// //   getDownloadURL,
// // } = require("firebase/storage");

// // const conn = createConnection(config);
import Product from "../models/product.model.js";
import Category from "../models/category.model.js";

export const addProduct = async (productData) => {
  try {
    const product = new Product(productData);
    return await product.save();
  } catch (err) {
    throw err;
  }
};

// exports.addService = async (serviceData) => {
//   const {
//     service_name,
//     service_description,
//     service_title,
//     service_thumbnail,
//     meta,
//   } = serviceData;

//   const addNewService = new Promise((resolve) => {
//     conn.query(
//       `INSERT INTO services(service_name, service_title, service_description, service_thumbnail, service_meta_description, service_meta_title, service_schema) VALUES('${service_name}','${service_title}','${service_description}','${service_thumbnail}','${meta.meta_description}','${meta.meta_title}','${meta.schema}')`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(true);
//       }
//     );
//   });

//   await addNewService;

//   return true;
// };

export const addCategory = async (categoryData) => {
  try {
    const category = new Category(categoryData);
    return await category.save();
  } catch (err) {
    throw err;
  }
};

// exports.addMessage = async (messageData) => {
//   const { name, email, phoneNumber, state, topic, message } = messageData;

//   const messageId = new Promise((resolve) => {
//     let now = new Date();
//     let y = now.getFullYear();
//     let m = now.getMonth() + 1;
//     let d = now.getDate();
//     let t = now.getTime();

//     d = d < 10 ? "0" + d : d;
//     m = m < 10 ? "0" + m : m;
//     y = y.toString();
//     y = y.substr(y.length - 2, 2);
//     t = t.toString();
//     t = t.substr(t.length - 3, 3);

//     let mId = "M" + m + d + y + t;
//     resolve(mId);
//   });

//   const message_id = await messageId;

//   const addNewMessage = new Promise((resolve) => {
//     conn.query(
//       `INSERT INTO message(message_id, name, email, phone_number, state, topic, message) VALUES('${message_id}', '${name}', '${email}', '${phoneNumber}', '${state}', '${topic}', '${message}')`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(true);
//       }
//     );
//   });

//   await addNewMessage;

//   return true;
// };

export const getProducts = async (category_id) => {
  try {
      return await Product.find();
  } catch (err) {
    throw err;
  }
};

// exports.getServices = async () => {
//   const getServicesData = new Promise((resolve) => {
//     conn.query(`SELECT * FROM services`, (err, result) => {
//       if (err) {
//         resolve(null);
//         throw err;
//       }
//       resolve(result);
//     });
//   });

//   return await getServicesData;
// };

export const getCategories = async () => {
  try {
    return await Category.find();
} catch (err) {
  throw err;
}
};

export const getProduct = async (product_id) => {
  try {
    return await Product.findById(product_id);
  } catch (err) {
    throw err;
  }
};

// exports.getService = async (service_id) => {
//   const getServiceData = new Promise((resolve) => {
//     conn.query(
//       `SELECT * FROM services WHERE service_id='${service_id}'`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(result[0]);
//       }
//     );
//   });

//   return await getServiceData;
// };

export const getCategory = async (category_id) => {
  try {
    return await Category.findById(category_id);
} catch (err) {
  throw err;
}
};

// exports.getMessage = async (message_id) => {
//   const getMessageData = new Promise((resolve) => {
//     conn.query(
//       `SELECT * FROM message WHERE message_id='${message_id}'`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(result[0]);
//       }
//     );
//   });

//   return await getMessageData;
// };

export const editProduct = async (productData) => {
  try {
    return await Product.findByIdAndUpdate({ _id: productData._id}, {
      $set: productData,
    },
      { new: true });
  } catch (err) {
    throw err
  }
};

// exports.editService = async (serviceData) => {
//   const {
//     service_id,
//     service_name,
//     service_title,
//     service_description,
//     service_thumbnail,
//     meta,
//   } = serviceData;

//   const editServiceData = new Promise((resolve) => {
//     conn.query(
//       `UPDATE services SET service_name='${service_name}', service_title='${service_title}', service_description='${service_description}', service_thumbnail='${service_thumbnail}', service_meta_description='${meta.meta_description}', service_meta_title='${meta.meta_title}', service_schema='${meta.schema}' WHERE service_id='${service_id}'`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(true);
//       }
//     );
//   });

//   return await editServiceData;
// };

export const editCategory = async (categoryData) => {
  try {
    return await Category.findByIdAndUpdate({ _id: categoryData._id}, {
      $set: categoryData,
    },
      { new: true });
  } catch (err) {
    throw err
  }
};

export const deleteProduct = async (product_id) => {
  try {
    return await Product.deleteOne({ _id: product_id});
  } catch (err) {
    throw err
  }
};

// exports.deleteService = async (service_id) => {
//   const deleteServiceData = new Promise((resolve) => {
//     conn.query(
//       `DELETE FROM services WHERE service_id='${service_id}'`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(true);
//       }
//     );
//   });

//   return await deleteServiceData;
// };

export const deleteCategory = async (category_id) => {
  try {
    return await Category.deleteOne({ _id: category_id});
  } catch (err) {
    throw err
  }
};

// exports.deleteMessage = async (message_id) => {
//   const deleteMsgData = new Promise((resolve) => {
//     conn.query(
//       `DELETE FROM message WHERE message_id='${message_id}'`,
//       (err, result) => {
//         if (err) {
//           resolve(null);
//           throw err;
//         }
//         resolve(true);
//       }
//     );
//   });

//   return await deleteMsgData;
// };

// exports.getMessages = async () => {
//   const getMessageData = new Promise((resolve) => {
//     conn.query(`SELECT * FROM message`, (err, result) => {
//       if (err) {
//         resolve(null);
//         throw err;
//       }
//       resolve(result);
//     });
//   });

//   return await getMessageData;
// };

export const getCountsForDashboard = async () => {
  try {
    const products = await Product.find().countDocuments();
    const categories = await Category.find().countDocuments();
    return { products, categories };
  } catch (err) {
    throw err;
  }
};
