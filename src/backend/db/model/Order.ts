import { randomUUID } from "crypto";
import { DataTypes, Model } from "sequelize";
import { db } from "../sequelize";
import { CartItem } from "./CartItem";
import { Country } from "./Country";
import User from "./User";

enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELED = "canceled",
}

export interface OrderAttributes {
  id?: number;
  publicId?: string;
  net: number;
  total: number;
  status: OrderStatus;

  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  address1: string;
  address2?: string;
  postalCode: string;
  city: string;
  state: string;
}

export class Order extends Model<OrderAttributes> {}
Order.init(
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

    status: {
      type: DataTypes.ENUM(
        OrderStatus.PENDING,
        OrderStatus.PROCESSING,
        OrderStatus.SHIPPED,
        OrderStatus.DELIVERED,
        OrderStatus.CANCELED
      ),
      allowNull: false,
    },
    net: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Order",
    timestamps: true,
  }
);

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(CartItem, { through: "OrderCartItem" });
CartItem.belongsToMany(Order, { through: "OrderCartItem" });

Order.belongsTo(Country);
Country.hasMany(Order);
