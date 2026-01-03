const express = require("express");
const { productRouter } = require("./routes/productRouter");
const { dbConnect } = require("./db_connection/connection");
const { config } = require("./config/config");

const PORT = config.PORT;
const app = express();
app.use(express.json());

app.use("/product-api", productRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
