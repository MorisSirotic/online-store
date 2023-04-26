import { randomUUID } from "crypto";
import { DataTypes, Model } from "sequelize";
import { db } from "../sequelize";
import { Product } from "./Product";

export interface CategoryAttributes {
  id?: number;
  publicId?: string;
  name: string;
  products?: Array<Product>;
}

export class Category extends Model<CategoryAttributes> {
  get products(): Product[] | undefined {
    return this.getDataValue("products");
  }
}

Category.init(
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
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Category",
    timestamps: true,
  }
);

Product.belongsToMany(Category, { through: { model: "CategoryProduct" } });
Category.belongsToMany(Product, { through: { model: "CategoryProduct" } });
