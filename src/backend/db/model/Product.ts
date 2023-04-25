import { DataTypes, Model, UUIDV4 } from "sequelize";
import { db } from "../sequelize";
import { randomUUID } from "crypto";

export interface ProductAttributes {
  id?: number;
  publicId?: string;
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
    publicId: {
      type: DataTypes.UUID,
      defaultValue: () => randomUUID(),
      allowNull: false,
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
