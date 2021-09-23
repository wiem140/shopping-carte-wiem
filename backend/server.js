<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require('path');
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

// serve static assets if in production
if (process.env.NODE_ENV=== 'production'){
  //set static folder
  app.use (express.static('frontend/build'));
  app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname, 'fronted','build','index.html'));
  });
}
const PORT = process.env.PORT || 5000;
=======
require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require('path');
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

// serve static assets if in production
if (process.env.NODE_ENV=== 'production'){
  //set static folder
  app.use (express.static('frontend/build'));
  app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname, 'fronted','build','index.html'));
  });
}
const PORT = process.env.PORT || 5000;
>>>>>>> f9707949b77172912715d2c986ff523cf3433ef4
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));