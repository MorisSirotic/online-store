import { DataTypes, Model } from "sequelize";
import { db } from "../sequelize";

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product extends Model<ProductAttributes> {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE(),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Product",
    timestamps: true,
  }
);
