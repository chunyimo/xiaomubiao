import chalk from 'chalk';
import {Db, MongoClient} from 'mongodb';

const connectDB = () => {
  const {DB_HOST, DB_PORT, DB_PASSWORD, DB_USERNAME, DB_NAME} = process.env;
  if (!DB_HOST || !DB_PORT || !DB_PASSWORD || !DB_USERNAME || !DB_NAME) {
    console.log(chalk.red(`[db error] cant not get a complete db url`));
    process.exit();
  }
  const url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
  const client = new MongoClient(url);
  client.connect(function(err) {
    console.log(chalk.green("[db] Connected successfully to db"));
  
    const db = client.db(DB_NAME);
  });
}

export default connectDB;