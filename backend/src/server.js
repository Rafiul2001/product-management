const express = require("express");
const cookieParser = require("cookie-parser");
const { productRouter } = require("./routes/productRouter");
const { dbConnect } = require("./db_connection/connection");
const { config } = require("./config/config");
const { adminRouter } = require("./routes/adminRouter");

const PORT = config.PORT;
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/admin-api", adminRouter);
app.use("/product-api", productRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
