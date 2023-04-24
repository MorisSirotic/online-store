import { Model, DataTypes } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import { Product } from "./Product";
import User from "./User";
import { db } from "../sequelize";

interface CartItemAttributes {
  id?: number;
  quantity: number;
  UserId?: number;
  ProductId?: number;
}

export class CartItem extends Model<CartItemAttributes> {}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: db,
    modelName: "CartItem",
    timestamps: true,
  }
);

Product.belongsToMany(User, { through: CartItem });
User.belongsToMany(Product, { through: CartItem });
