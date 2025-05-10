import { Model } from "sequelize";
export class IUserCRUISER_ONLINE extends Model {
  id!: number
  first_name!: string
  last_name!: string
  money?: number
  rub?: number
  email!: string

}
export default function (sequelize: any, DataTypes: any) {


  IUserCRUISER_ONLINE.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    money: {
      type: DataTypes.INTEGER,
      defaultValue: 3000,
    },
    rub: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'users'
  })
}