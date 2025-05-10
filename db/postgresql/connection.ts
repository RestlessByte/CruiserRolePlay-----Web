import { Sequelize, DataTypes } from "sequelize"; // ✅ Добавлен импорт DataTypes
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: '.env' });

export type IDataBase = 'southern';

export const DataBaseCRUISER_ONLINE = async (SQL_BASE: IDataBase) => {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: SQL_BASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
    logging: true
  });

  const db: any = {};

  const modelsPath = path.resolve(__dirname, '../../../models');
  const modelFiles = fs.readdirSync(modelsPath)
    .filter((file) => file.endsWith('.ts') && file !== path.basename(__filename));

  for (const file of modelFiles) {
    const modelPath = path.join(modelsPath, file);
    const modelFn = require(modelPath).default;
    const model = modelFn(sequelize, DataTypes); // ✅ Передаем DataTypes напрямую
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
};