import Router, { Request } from "express";
import { Category, CategoryAttributes } from "../../db/model/Category";
import { Product } from "../../db/model/Product";
//TODO: Use publicId for the client facing API

const router = Router();

interface CategoryData extends CategoryAttributes {}

router.get("/:id", async (req: Request<CategoryData>, res) => {
  const id = req.params.id;

  const category = await Category.findOne({
    where: { id: id },
    include: [Product],
  });

  res.send(category);
});

router.get("/", (req: Request<CategoryData>, res) => {
  const categoryData = req.body;

  Category.findAll()
    .then((cats) => {
      res.json(cats);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong while fetching the categories: " + err,
      });
    });
});

router.get("/:id", async (req: Request<CategoryData>, res) => {
  const id = req.params.id;

  Category.findByPk(id)
    .then((cat) => {
      if (cat == null) {
        throw new Error("Category with an ID of: " + id + " does not exist");
      }

      res.json(cat);
    })

    .catch((err) => {
      res.status(404).send({ message: err.message });
    });
});

router.post("/add/:id/", async (req: Request<CategoryData>, res) => {
  const categoryId = req.params.id;
  const product = await Product.findByPk(2);

  const cart = Category.create({ name: "test category #1" });
});

router.post("/", (req: Request<CategoryData>, res) => {
  const categoryData: CategoryData = req.body;

  Category.create(categoryData)
    .then((category) => {
      res.send(category);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Something when wrong while trying to create the category" + err,
      });
    });
});

router.put("/:id", (req: Request<CategoryData>, res) => {
  const id = req.params.id;
  const categoryData: CategoryData = req.body;

  Category.update(categoryData, { where: { id: id } })
    .then((category) => {
      if (category[0] == 0) {
        throw new Error("Category with an ID of " + id + " doesn't exist");
      }

      res.send(category);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Category.findByPk(id)
    .then((cat) => {
      if (cat == null) {
        throw new Error("Category with an ID of " + id + " doesn't exist");
      }

      res.send(cat?.destroy());
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

export { router as authCategoriesRoutes };
