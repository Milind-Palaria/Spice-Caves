const dbConnect = require("./dbConnect");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { mail, name, phone, address, password: plainTextPassword } = req.body;

  try {
    const userExists = await User.findOne({ mail }).lean();
    if (userExists) {
      return res.json({ status: "error", error: "User with this e-mail already exists." });
    }

    if (phone.length !== 10) {
      return res.json({ status: "error", error: "Invalid Phone No." });
    }

    if (!plainTextPassword || plainTextPassword.length < 5) {
      return res.json({ status: "error", error: "Password too small." });
    }

    const password = await bcrypt.hash(plainTextPassword, 10);
    await User.create({ mail, name, phone, address, password });

    res.json({ status: "ok", data: { name, address } });
  } catch (error) {
    console.error("Error during user creation:", error);
    res.json({ status: "error", error: "Server error" });
  }
};
