import mongoose from 'mongoose';

let db; // A variable to hold the connected database object

const dbConnection = async () => {
  if (db) {
    console.log('Using existing database connection.');
    return db;
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
      useNewUrlParser: true,

      useUnifiedTopology: true
    });

    db = mongoose.connection.db; // Get the database object
    console.log('\x1b[33m%s\x1b[0m', `MongoDB successfully connected.`);
    return db;
  } catch (err) {
    console.error("\x1b[31m", 'Error on Database connection', err);
    // Optional: You can handle reconnection logic here if needed
    throw err;
  }
};

export { dbConnection, mongoose };