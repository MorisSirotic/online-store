import { Model, DataTypes } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import { Product } from "./Product";
import User from "./User";
import { db } from "../sequelize";
import { randomUUID } from "crypto";

interface CartItemAttributes {
  id?: number;
  publicId?: number;
  UserId?: number;
  ProductId?: number;
  
  quantity: number;
}

export class CartItem extends Model<CartItemAttributes> {}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    publicId: {
      type: DataTypes.UUID,
      defaultValue: () => randomUUID(),
      allowNull: true,
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
