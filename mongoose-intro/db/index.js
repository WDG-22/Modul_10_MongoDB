import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URI, { logging: false });

export default sequelize;

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
