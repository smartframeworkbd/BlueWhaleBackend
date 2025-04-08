import { Sequelize } from 'sequelize';
import { dotenvHelper } from '../config/dotenv.js';

const sequelize = new Sequelize(dotenvHelper.dbConfig.database, dotenvHelper.dbConfig.user, dotenvHelper.dbConfig.password, {
  host: dotenvHelper.dbConfig.host,
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 10000, 
  },
  dialectOptions: {
    connectTimeout: 10000,
    charset: 'utf8mb4',
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
  logging: false, 
});
// console.log(sequelize);

export default sequelize