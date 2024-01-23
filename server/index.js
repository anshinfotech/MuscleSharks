require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require("./database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/userRouter");
const productRoutes = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRouter");
const couponRouter = require("./routes/couponRouter");
const cartRouter = require("./routes/cartRouter");
const adminRouter = require("./routes/adminRouter");
const paymentRouter = require("./routes/paymentRoute");
const fileURLToPath = require('url')
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Razorpay = require("razorpay");

dbConnection();
app.use(express.static(path.resolve(__dirname, "dist")));


app.use(
  cors({
    credentials: true,
    origin: [
      "https://musclesharks.in",
      "https://www.musclesharks.in",
      "http://195.35.7.215/",
      "http://localhost:5173",
    ],
  })
);
app.use(cookieParser());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });


app.use("/api", userRouter);
app.use("/api", productRoutes);
app.use("/api", cartRouter);
app.use("/api", orderRouter);
app.use("/api", adminRouter);
app.use("/api", couponRouter);
app.use("/api", paymentRouter);

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on PORT ${process.env.PORT} ........`)
);