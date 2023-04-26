import { randomUUID } from "crypto";
import { DataTypes, Model } from "sequelize";
import { db } from "../sequelize";

export interface CountryAttributes {
  id?: number;
  name: string;
  publicId?: string;
  tax: number;
}

export class Country extends Model<CountryAttributes> {}

Country.init(
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
      allowNull: false,
    },

    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "Country", timestamps: true }
);
