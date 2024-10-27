const mongoose = require("mongoose");

let isConnected = false;
const dbConnect = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = dbConnect;
