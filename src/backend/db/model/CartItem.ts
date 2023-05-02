import { randomUUID } from "crypto";
import { DataTypes, Model } from "sequelize";
import { db } from "../sequelize";
import { Product } from "./Product";
import User from "./User";

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
