import Router, { Request } from "express";
import { CartItem } from "../../db/model/CartItem";

interface CartItemData {
  id?: number;
  userId: number;
  productId: number;
  quantity: number;
}

const router = Router();

router.post("/", async (req: Request<CartItemData>, res) => {
  const cartItemData: CartItemData = req.body;

  const prod = await CartItem.findOne({
    where: { ProductId: cartItemData.productId },
  });

  if (!prod) {
    CartItem.create(cartItemData)
      .then((item) => {
        res.status(201).json(item);
      })
      .catch((error: any) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    const am = prod.getDataValue("quantity");
    prod.update({ quantity: am + cartItemData.quantity });

    res.send(prod);
  }
});

router.put("/", (req, res) => {
  const cartItemData: CartItemData = req.body;

  CartItem.update(cartItemData, { where: { id: cartItemData.id } })
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});

router.get("/", (req, res) => {
  const cartItemData: CartItemData = req.body;

  if (!cartItemData.id) {
    CartItem.findAll()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error: any) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    CartItem.findOne({ where: { id: cartItemData.id } }).then((item) => {
      res.status(200).send(item);
    });
  }
});

router.delete("/", (req, res) => {
  const cartItemData: CartItemData = req.body;

  CartItem.findOne({ where: { id: cartItemData.id } })
    .then((item) => {
      item
        ?.destroy()
        .then((r) => {
          res.json(r);
        })
        .catch((err) => {
          res.status(500).send({ message: err });
        });
    })
    .catch((error) => {
      res.status(400).send({ message: error });
    });
});

export { router as authCartItems };
