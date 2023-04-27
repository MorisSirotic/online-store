import { DataTypes, Model } from "sequelize";
import { db } from "../sequelize";

// Define a Session model using Sequelize
export interface SessionAttributes {
  sid: string;
  data: string;
  expires: Date;
}

export class Session extends Model<SessionAttributes> {}

Session.init(
  {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    data: DataTypes.TEXT,
    expires: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "Session",
    timestamps: true,
  }
);
