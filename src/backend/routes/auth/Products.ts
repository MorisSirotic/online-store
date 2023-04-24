import Router, { Request } from "express";
import { Product } from "../../db/model/Product";
 

interface ProductData {
  id?: number;
  name: string;
  price: number;
  stock: number;
}

const router = Router();

router.post("/", (req: Request<ProductData>, res) => {
  const productData: ProductData = req.body;

  Product.create(productData)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});

router.put("/", (req, res) => {
  const productData: ProductData = req.body;

  Product.update(productData, { where: { id: productData.id } })
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});

router.get("/", (req, res) => {
  const productData: ProductData = req.body;
  if (!productData.id) {
    Product.findAll()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error: any) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    Product.findOne({ where: { id: productData.id } }).then((product) => {
      res.status(200).send(product);
    });
  }
});

router.delete("/", (req, res) => {
  const productData: ProductData = req.body;

  Product.findOne({ where: { id: productData.id } })
    .then((product) => {
      product
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

export { router as authProducts };
