import express from "express";
import compression from "compression";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import mongoose  from "mongoose";
import multer from "multer";
dotenv.config()

import {
  addProduct,
  // addService,
  addCategory,
  // addMessage,
  getProducts,
  // getServices,
  getCategories,
  getProduct,
  // getService,
  getCategory,
  // getMessage,
  editProduct,
  // editService,
  editCategory,
  deleteProduct,
  // deleteService,
  deleteCategory,
  // deleteMessage,
  // getMessages,
  // getCountsForDashboard,
} from "./services/database.js";
// const { intializeFirebaseApp } = require("./services/firebase");

const app = express();
app.use(express.json());

// intializeFirebaseApp();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/api/addProduct", async (req, res) => {
  try {
    const result = await addProduct(req.body);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/addService", async (req, res) => {
//   try {
//     const added = await addService(req.body);
//     if (added) return res.status(200).send("successfully added service"); 
//   } catch (error) {
//     res.status(503).send("request failed");
//   }
// });

app.post("/api/addCategory", async (req, res) => {
  try {
    const result = await addCategory(req.body);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/addMessage", async (req, res) => {
//   try {
//     const added = await addMessage(req.body);
//   if (added) return res.status(200).send("successfully sent message");
//   } catch (error) {
//     res.status(503).send();
//   }
// });

app.post("/api/getProducts", async (req, res) => {
  try {
    const result = await getProducts(req.body.category_id);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/getServices", async (req, res) => {
//   try {
//     const services = await getServices();
//   if (services) return res.status(200).send(services);
//   } catch (error) {
//     res.status(503).send();
//   }
// });

app.post("/api/getCategories", async (req, res) => {
  try {
    const result = await getCategories();
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/getMessages", async (req, res) => {
//   try {
//     const messages = await getMessages();
//   if (messages) return res.status(200).send(messages);
//   } catch (error) {
//     res.status(503).send();
//   }
// });

app.post("/api/getProduct", async (req, res) => {
  try {
    const result = await getProduct(req.body.product_id);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/getService", async (req, res) => {
//   try {
//     const service = await getService(req.body.service_id);
//     if (service) return res.status(200).send(service);
//   } catch (error) {
//     res.status(503).send();
//   }
// });

app.post("/api/getCategory", async (req, res) => {
  try {
    const result = await getCategory(req.body.category_id);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/getMessage", async (req, res) => {
//   const message = await getMessage(req.body.message_id);
//   if (message) return res.status(200).send(message);
//   res.status(503).send();
// });

app.post("/api/editProduct", async (req, res) => {
  try {
    const result = await editProduct(req.body);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

// app.post("/api/editService", async (req, res) => {
//   const edited = await editService(req.body);
//   if (edited) return res.status(200).send("Successfully changed service");
//   res.status(503).send();
// });

app.post("/api/editCategory", async (req, res) => {
  try {
    const result = await editCategory(req.body);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
      });
  }
});

app.post("/api/deleteProduct", async (req, res) => {
  try {
    const result = await deleteProduct(req.body.product_id);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
    });
  }
});

// app.post("/api/deleteService", async (req, res) => {
//   const deleted = await deleteService(req.body.service_id);
//   if (deleted) return res.status(200).send("Successfully deleted service");
//   res.status(503).send();
// });

app.post("/api/deleteCategory", async (req, res) => {
  try {
    const result = await deleteCategory(req.body.category_id);
    return res.status(200).send(result);
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message,
        error: err
    });
  }
});

// app.post("/api/deleteMessage", async (req, res) => {
//   const deleted = await deleteMessage(req.body.message_id);
//   if (deleted) return res.status(200).send("Successfully deleted message");
//   res.status(503).send();
// });

// app.post("/api/getCountsForDashboard", async (req, res) => {
//   const counts = await getCountsForDashboard();
//   res.status(200).send(counts);
// });

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.dbusername}:${process.env.password}@cluster0.vkkpm.mongodb.net/${process.env.database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then((result) => {
    console.log("connect")
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => console.log(err));

