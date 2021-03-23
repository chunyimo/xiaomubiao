import chalk from 'chalk';
import { Db } from 'mongodb';
import mongoose from 'mongoose';
import '../models';
import initModel from '../models';
const connectDB = async (): Promise<Db | undefined> => {
  try {
    const { DB_HOST, DB_PORT, DB_PASSWORD, DB_USERNAME, DB_NAME } = process.env;
    if (!DB_HOST || !DB_PORT || !DB_PASSWORD || !DB_USERNAME || !DB_NAME) {
      console.log(chalk.red('[db error] cant not get a complete db url'));
      process.exit();
    }
    const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    console.info(chalk.yellow('mongodb uri: ', uri));
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.connection.db;
    console.log(chalk.green('[db] Connected successfully to db'));
    initModel();
    console.log(chalk.green('[db init] init db successfully'));
    return db;
  } catch (error) {
    console.log(chalk.red('[db] connected failed'));
  }
};

export default connectDB;