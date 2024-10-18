import express from "express";
const app = express();
const PORT = 7000;
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.listen(/*PORT*/ PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
