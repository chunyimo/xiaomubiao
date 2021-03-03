import dotenv from 'dotenv';
import { pathToFileURL } from 'url';
import path from 'path';

export const initEnv = () => {
  dotenv.config({path: path.resolve(__dirname, '../../.env')})
}