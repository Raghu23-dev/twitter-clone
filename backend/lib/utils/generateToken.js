import jwt from "jsonwebtoken";
export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, //prevent XSS attack cross-site scripting attacks
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //CSRF attacks cross-site request forgery attack
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};
