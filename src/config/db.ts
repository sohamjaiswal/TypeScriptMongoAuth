import mongoose from 'mongoose';
import logger from 'src/helpers/logger/logger';


const connectionUrl = process.env.DB_URL;


const initDB = async () => {
  try {
    if (!connectionUrl) {
      logger.error('No db url provided!');
      return;
    }
    await mongoose.connect(connectionUrl);
    logger.info('Connected to database!');
  } catch (error) {
    logger.error(error);
  }
};

initDB();