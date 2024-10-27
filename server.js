const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const JWT_SECRET = process.env.JWT_SECRET;

mongoose
.connect(process.env.MONGO_URI)
  .then((w) => console.log("Database connected"));

  
  const app = express();
  app.use(cors());
  app.use("/", express.static(path.join(__dirname, "./")));
app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  const { mail, password } = req.body;
  var user = await User.findOne({ mail }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid e-mail/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the username, password combination is successful

    const token = jwt.sign(
      {
        id: user._id,
        username: user.mail,
      },
      JWT_SECRET
    );
    // console.log("logged in");
    var uname = user.name;
    var uaddress = user.address;
    return res.json({ status: "ok", data: { token, uname, uaddress } });
  }

  res.json({ status: "error", error: "Invalid e-mail/password" });
});
// app.post('/api/check', async (req, res) => {

// })
// app.post("/api/register", async (req, res) => {
//   const { mail, name, phone, address, password: plainTextPassword } = req.body;
//   var user = await User.findOne({ mail }).lean();

//   if (user) {
//     res.json({
//       status: "error",
//       error: "User with this e-mail already exists. Use another e-mail I.D.",
//     });
//     return;
//   }
//   const password = await bcrypt.hash(plainTextPassword, 10);
//   if (phone.length < 10 || phone.length > 10) {
//     res.json({
//       status: "error",
//       error: "Invalid Phone No.",
//     });
//     return;
//   }
//   if (!plainTextPassword || typeof plainTextPassword !== "string") {
//     res.json({ status: "error", error: "Invalid password" });
//     return;
//   }

//   if (plainTextPassword.length < 5) {
//     res.json({
//       status: "error",
//       error: "Password too small. Should be atleast 6 characters",
//     });
//     return;
//   }

//   try {
//     const response = await User.create({
//       mail,
//       name,
//       phone,
//       address,
//       password,
//     });

//     // console.log("user created succesfuly");
//   } catch (error) {
//     // console.log(error)
//     throw error;
//   }
//   //
//   //
//   // if (user.name != null) {
//   //     var uname=user.name;
//   //     var uaddress=user.address
//   // }
//   res.json({ status: "ok", data: { name, address } });
//   // console.log(await bcrypt.hash(pass,10))
// });

app.post("/api/register", async (req, res) => {
  const { mail, name, phone, address, password: plainTextPassword } = req.body;
  
  try {
    // Check if user exists
    const userExists = await User.findOne({ mail }).lean();
    if (userExists) {
      return res.json({
        status: "error",
        error: "User with this e-mail already exists. Use another e-mail I.D.",
      });
    }
    
    // Validate phone length
    if (phone.length !== 10) {
      return res.json({
        status: "error",
        error: "Invalid Phone No.",
      });
    }

    // Validate password
    if (!plainTextPassword || typeof plainTextPassword !== "string" || plainTextPassword.length < 5) {
      return res.json({
        status: "error",
        error: "Password too small. Should be at least 6 characters",
      });
    }

    // Hash password and create user
    const password = await bcrypt.hash(plainTextPassword, 10);
    const response = await User.create({
      mail,
      name,
      phone,
      address,
      password,
    });

    return res.json({ status: "ok", data: { name, address } });
  } catch (error) {
    console.error("Error during user creation:", error);
    return res.json({ status: "error", error: "Server error" });
  }
});
app.listen(3000, () => {
  console.log("server up");
});
