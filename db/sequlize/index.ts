import { Sequelize, Model, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'ai',
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

// ========================= Users =========================
export class TelegramAIHubInterfaceUsers extends Model {
  declare id: number;
  declare user_id: number | null;
  declare username: string | null;
  declare name: string;
  declare speak: boolean;
  declare ai_model: string | null;
  declare trigger: boolean;
  declare email: string | null;
  declare trigger_email: boolean;
  declare trigger_addinfo: boolean;
  declare trigger_addname: boolean;
  declare rub: number;
  declare premium_ai: boolean;
  declare trigger_ai: boolean;
  declare ssh_id: number;
  declare trigger_ssh_ip: boolean;
  declare trigger_ssh_name: boolean;
  declare trigger_ssh_port: boolean;
  declare trigger_ssh_password: boolean;
  declare trigger_ssh_auth_key: boolean;
  declare lenght_chats_save: number;
  declare lenght_chats_nosave: number;
  declare mute: number;
  declare trigger_ai_write: boolean;
  declare trigger_support: boolean;
  declare integration_id: number | null;
  declare message_user: boolean;
  declare report_id: number | null;
  declare id_message_for_delete: number | null;
  declare prompt_id: number | null;
  declare trigger_ai_ssh_usage: boolean;
  declare last_command: boolean;
  declare trigger_bussiness_bot_token: boolean;
}

TelegramAIHubInterfaceUsers.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  username: DataTypes.STRING,
  name: {
    type: DataTypes.STRING,
    defaultValue: 'Пока не задано'
  },
  speak: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  ai_model: DataTypes.STRING,
  trigger: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  email: DataTypes.STRING,
  trigger_email: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_addinfo: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_addname: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  rub: {
    type: DataTypes.DECIMAL,
    defaultValue: 3
  },
  premium_ai: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_ai: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  ssh_id: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  trigger_ssh_ip: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_ssh_name: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_ssh_port: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_ssh_password: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_ssh_auth_key: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  lenght_chats_save: {
    type: DataTypes.DECIMAL,
    defaultValue: 10
  },
  lenght_chats_nosave: {
    type: DataTypes.DECIMAL,
    defaultValue: 10
  },
  mute: {
    type: DataTypes.DECIMAL,
    defaultValue: 5
  },
  trigger_ai_write: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_support: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  integration_id: DataTypes.DECIMAL,
  message_user: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  report_id: DataTypes.DECIMAL,
  id_message_for_delete: DataTypes.DECIMAL,
  prompt_id: DataTypes.DECIMAL,
  trigger_ai_ssh_usage: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  last_command: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trigger_bussiness_bot_token: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, { sequelize, modelName: 'users' });

// // ========================= Chats =========================
// export class TelegramAIHubInterfaceChats extends Model {
//   declare id: number;
//   declare user_id: number | null;
//   declare req: string | null;
//   declare res: string | null;
//   declare created_at: Date;
//   declare is_saved: boolean;
//   declare last: boolean;
//   declare is_deleted: boolean;
// }

// TelegramAIHubInterfaceChats.init({
//   id: {
//     type: DataTypes.DECIMAL,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   user_id: DataTypes.DECIMAL,
//   req: DataTypes.STRING,
//   res: DataTypes.STRING,
//   created_at: DataTypes.DATE,
//   is_saved: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
//   },
//   last: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true
//   },
//   is_deleted: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
//   },
// }, { sequelize, modelName: 'chats' });

// ========================= SSH =========================
export class TelegramAIHubInterfaceSSHUsers extends Model {
  declare id: number;
  declare user_id: number;
  declare balance: number;
  declare auth_key: string;
  declare port: string;
  declare name: string;
  declare password: string;
  declare ip: string;
  declare usage: number;
  declare trigger_ai_ssh: boolean;
  declare last_command: boolean;
  declare title: string;
  declare info: string;
}

TelegramAIHubInterfaceSSHUsers.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  balance: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  auth_key: DataTypes.STRING,
  port: DataTypes.STRING,
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  ip: DataTypes.STRING,
  usage: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  trigger_ai_ssh: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  last_command: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: 'Ubuntu'
  },
  info: {
    type: DataTypes.STRING,
    defaultValue: 'дистрибутив на ядре Linux'
  }
}, { sequelize, modelName: 'ssh' });

// ========================= AI Models =========================
export class TelegramAIHubInterfaceAIModels extends Model {
  declare id: number;
  declare title: string;
  declare link: string;
  declare url_api: string;
  declare api_key: string;
  declare premium: boolean;
  declare max_tokens: number;
  declare description: string;
  declare rub: string;
  declare price: number;
  declare blocked: boolean;
  declare output: number;
  declare input: number;
  declare generating_image: boolean;
  declare off: boolean
}

TelegramAIHubInterfaceAIModels.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  link: DataTypes.STRING,
  url_api: {
    type: DataTypes.STRING,
    defaultValue: 'https://openrouter.ai/api/v1'
  },
  api_key: {
    type: DataTypes.STRING,
    defaultValue: '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'
  },
  premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  max_tokens: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: 'Пока что не задано'
  },
  rub: {
    type: DataTypes.STRING,
    defaultValue: '$0/month'
  },
  price: {
    type: DataTypes.DECIMAL,
    defaultValue: 35000
  },
  blocked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  output: {
    type: DataTypes.DECIMAL,
    defaultValue: 5
  },
  input: {
    type: DataTypes.DECIMAL,
    defaultValue: 5
  },
  generating_image: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  off: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, { sequelize, modelName: 'models' });

// ========================= Prompts =========================
export class TelegramAIHubInterfacePromptsForBuy extends Model {
  declare id: number;
  declare title: string;
  declare name: string;
  declare age: number;
  declare price: number;
  declare users: number;
  declare prompt: string;
  declare smile: string;
}

TelegramAIHubInterfacePromptsForBuy.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  age: {
    type: DataTypes.DECIMAL,
    defaultValue: 30
  },
  price: DataTypes.DECIMAL,
  users: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  prompt: DataTypes.STRING,
  smile: DataTypes.STRING
}, { sequelize, modelName: 'prompts' });

// ========================= Supports =========================
export class TelegramAIHubInterfaceSupport extends Model {
  declare id: number;
  declare user_id: number | null;
  declare text: string | null;
}

TelegramAIHubInterfaceSupport.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  text: DataTypes.STRING
}, { sequelize, modelName: 'supports' });

// ========================= Rules =========================
export class TelegramAIHubInterfaceRules extends Model {
  declare id: number;
  declare category: string;
  declare title: string;
  declare description: string;
  declare severity_level: number;
}

TelegramAIHubInterfaceRules.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  severity_level: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      min: 1,
      max: 3,
    },
  },
}, { sequelize, modelName: 'rules' });

// ========================= Business =========================
export class TelegramAIHubInterfaceBusiness extends Model {
  declare id: number;
  declare user_id: number;
  declare rub: number;
  declare ai_model: string;
  declare title: string;
  declare deposit: number;
  declare info_biz: string;
  declare channel_id: number;
  declare bot_token: string;
  declare power_bot: boolean;
}

TelegramAIHubInterfaceBusiness.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  rub: {
    type: DataTypes.DECIMAL
    ,
    defaultValue: 0
  },
  ai_model: {
    type: DataTypes.STRING,
    defaultValue: 'Не выбрана модель нейросети'
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: 'Без названия'
  },
  deposit: {
    type: DataTypes.DECIMAL,
    defaultValue: 65000
  },
  info_biz: DataTypes.STRING,
  channel_id: DataTypes.DECIMAL,
  bot_token: DataTypes.STRING,
  power_bot: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, { sequelize, modelName: 'busineses' });

// ========================= Course =========================
export class TelegramAIHubInterfaceCourses extends Model {
  declare id: number;
  declare ai_tokens_rub: number;
  declare ai_tokens_amount: number;
}

TelegramAIHubInterfaceCourses.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  ai_tokens_rub: {
    type: DataTypes.DECIMAL,
    defaultValue: 500
  },
  ai_tokens_amount: {
    type: DataTypes.DECIMAL,
    defaultValue: 50
  }
}, {
  sequelize, modelName: 'courses',
  tableName: 'courses'
});

// ========================= ItemsUsers =========================
export class TelegramAIHubInterfaceItemUsers extends Model {
  declare id: number;
  declare user_id: number;
  declare type: string;
  declare item_id: number;
}

TelegramAIHubInterfaceItemUsers.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  type: DataTypes.STRING,
  item_id: DataTypes.DECIMAL
}, { sequelize, modelName: 'items_users' });

// ========================= BlockChats =========================
export class TelegramAIHubInterfaceBlockChat extends Model {
  declare id: number;
  declare user_id: number;
  declare chat_id: number;
}

TelegramAIHubInterfaceBlockChat.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  chat_id: DataTypes.DECIMAL
}, { sequelize, modelName: 'block_chats' });

// ========================= AutoPostingInChannel =========================
export class TelegramAIHubInterfaceAutoPostingInChannel extends Model {
  declare id: number;
  declare user_id: number | null;
  declare bot_token: string;
  declare channel_id: number;
}

TelegramAIHubInterfaceAutoPostingInChannel.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: DataTypes.DECIMAL,
  bot_token: DataTypes.STRING,
  channel_id: DataTypes.DECIMAL
}, { sequelize, modelName: 'auto_posting_in_channel' });

// ========================= Payment =========================
export class TelegramAIHubInterfacePayment extends Model {
  declare id: number;
  declare user_id: number | null;
  declare payment_id: string | null;
  declare amount: number | null;
  declare status: string | null;
  declare price: number | null;
  declare type: string | null;
  declare current_rub: number | null;
}

TelegramAIHubInterfacePayment.init({
  id: {
    type: DataTypes.DECIMAL,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  payment_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  current_rub: {
    type: DataTypes.DECIMAL,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'ai_payments',
  tableName: 'ai_payments'
});

export const TelegramAIHubSyncModels = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected and models synced');

    // Проверка создания таблиц
    const tables = await sequelize.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    console.log('Tables created:', tables[0].map((t: any) => t.table_name));

  } catch (error) {
    console.error('DATABASE ERROR:', error);
    throw error;
  }
};