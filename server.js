const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    //This databse returns a promise an we should handle it using then(con)=>{}
  })
  .then(() => {
    console.log('Database Connected successfully');
  });

const port = 5002;

app.listen(5002 || process.env.PORT, () => {
  console.log(`app is running on port ${port}`);
});
