import mongoose from 'mongoose';

const initDB = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGO_URI, { dbName: 'notes' });
    console.log(`DB connected to ${mongo.connection.name}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export { initDB };
