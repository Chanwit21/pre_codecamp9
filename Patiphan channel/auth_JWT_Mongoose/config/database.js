const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
  // COnnecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModisy: false,
    })
    .then(() => {
      console.log('Successfily connected to database');
    })
    .catch((err) => {
      console.log('Error connecting to database');
      console.error(err);
      process.exit(1);
    });
};
