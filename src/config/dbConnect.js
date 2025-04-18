
import mysql from 'mysql2/promise';
import sequelize from '../model/index.js';
import { dotenvHelper } from './dotenv.js';

// dotenv.config();


  const createDatabaseIfNotExists = async () => {
    // console.log("call2");
    console.log(dotenvHelper.dbConfig);
    
    const connection = await mysql.createConnection(
        {
            host: dotenvHelper.dbConfig.host,
            user: dotenvHelper.dbConfig.user,
            password:dotenvHelper.dbConfig.password,
            // database:"hostlive_nodeerp"
            // port:3306,
            // connectTimeout: 10000,
          }
    );
    // console.log(connection,"call3");
    
    try {
        const res = await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dotenvHelper.dbConfig.database}\``);
        // console.log("call this",res);
        // const res = await connection.query(
        //   `CREATE DATABASE IF NOT EXISTS \`${dotenvHelper.dbConfig.database}\` 
        //    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
        // );
        console.log('Database created or already exists.');
    } finally {
      await connection.end();
    }
  };
 export const setup = async () => {
    try {
    
        
      await createDatabaseIfNotExists();
      // console.log('db s');
      
      await sequelize.authenticate();
      console.log('Database connected...');
  
      await sequelize.sync({ force: false });
      console.log('Database & tables created!');
    } catch (error) {
      console.error('Error setting up database:', error);
    }
  };