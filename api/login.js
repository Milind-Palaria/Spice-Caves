const dbConnect = require("./dbConnect");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { mail, password } = req.body;
  const user = await User.findOne({ mail }).lean();

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.json({ status: "error", error: "Invalid e-mail/password" });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.mail,
    },
    JWT_SECRET
  );

  res.json({ status: "ok", data: { token, uname: user.name, uaddress: user.address } });
};
