import Router, { Request } from "express";
import { Order, OrderAttributes } from "../../db/model/Order";

interface OrderData extends OrderAttributes {
  countryId?: number;
}

const router = Router();

// router.post("/new", async (req: Request<OrderData>, res: Response) => {
//   const orderData: OrderData = req.body;

//   try {
//     const country = await Country.findByPk(orderData.countryId);
//     if (!country) {
//       return res.status(400).json({ message: "Invalid country ID" });
//     }

//     const [order, created] = await Order.findOrCreate({
//       where: { id: orderData?.id },
//       defaults: { ...orderData },
//     });

//     if (!created) {
//       await order.update({ ...orderData });
//     }

//     res.status(201).json(order);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.get("/new", (req, res) => {
//   const { limit, offset, status } = req.query;

//   const whereClause: any = {};
//   if (status) {
//     whereClause.status = status;
//   }

//   const queryOptions: any = {
//     where: whereClause,
//     include: [{ model: Country, attributes: ["id", "publicId", "tax"] }],
//     order: [["createdAt", "DESC"]],
//     limit: limit ? parseInt(limit.toString()) : undefined,
//     offset: offset ? parseInt(offset.toString()) : undefined,
//   };

//   Order.findAll(queryOptions)
//     .then((orders) => {
//       res.status(200).json(orders);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ message: "Internal server error" });
//     });
// });

router.post("/", async (req: Request<OrderData>, res) => {
  const orderData: OrderData = req.body;

  try {
    const order = await Order.create(orderData);
    res.status(201).json(order);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/", async (req: Request<OrderData>, res) => {
  const orderData: OrderData = req.body;

  try {
    const order = await Order.findOne({ where: { id: orderData.id } });

    if (!order) {
      throw new Error(`Order with ID ${orderData.id} not found`);
    }

    const updatedOrder = await order.update(orderData);
    res.status(200).json(updatedOrder);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      throw new Error(`Order with ID ${orderId} not found`);
    }

    res.status(200).json(order);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      throw new Error(`Order with ID ${orderId} not found`);
    }

    await order.destroy();
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { router as authOrderRoutes };
