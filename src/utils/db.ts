import chalk from 'chalk';
import mongoose from 'mongoose';

const connectDB = () => {
  const {DB_HOST, DB_PORT, DB_PASSWORD, DB_USERNAME, DB_NAME} = process.env;
  if (!DB_HOST || !DB_PORT || !DB_PASSWORD || !DB_USERNAME || !DB_NAME) {
    console.log(chalk.red(`[db error] cant not get a complete db url`));
    process.exit();
  }
  const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
  const db = mongoose.connection;
  db.on('error', () => {
    console.log(chalk.red("[db] connected failed"));
  })
  db.once('open', () => {
    console.log(chalk.green("[db] Connected successfully to db"));
  })
  return db;
}

export default connectDB;