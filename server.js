require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 3000;
const connectDB = require("./db/dbConfig");

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
