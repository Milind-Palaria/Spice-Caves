const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "jnckgvnriopadmcaievkaemlmvcak@**cjnkdkmvkvsivrmslvsnallanf";

mongoose
  .connect(
    "mongodb+srv://Milind-Palaria:milind47%40iiitl@spice-caves-cluster.sjgydgj.mongodb.net/?retryWrites=true&w=majority&appName=Spice-Caves-Cluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((w) => console.log("Database connected"));

const app = express();
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
app.post("/api/register", async (req, res) => {
  const { mail, name, phone, address, password: plainTextPassword } = req.body;
  var user = await User.findOne({ mail }).lean();

  if (user) {
    res.json({
      status: "error",
      error: "User with this e-mail already exists. Use another e-mail I.D.",
    });
    return;
  }
  const password = await bcrypt.hash(plainTextPassword, 10);
  if (phone.length < 10 || phone.length > 10) {
    res.json({
      status: "error",
      error: "Invalid Phone No.",
    });
    return;
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    res.json({ status: "error", error: "Invalid password" });
    return;
  }

  if (plainTextPassword.length < 5) {
    res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
    return;
  }

  try {
    const response = await User.create({
      mail,
      name,
      phone,
      address,
      password,
    });

    // console.log("user created succesfuly");
  } catch (error) {
    // console.log(error)
    throw error;
  }
  //
  //
  // if (user.name != null) {
  //     var uname=user.name;
  //     var uaddress=user.address
  // }
  res.json({ status: "ok", data: { name, address } });
  // console.log(await bcrypt.hash(pass,10))
});
app.listen(3000, () => {
  console.log("server up");
});
