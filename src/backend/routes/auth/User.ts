import bcrypt from "bcrypt";
import Router, { Request } from "express";
import { User } from "../../db/model/User";
import { encryptPassword } from "../../util/bcrypt";

interface UserData {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const router = Router();
router.post("/test", async (req: Request<UserData>, res) => {
  const userData: UserData = req.body;
  const enc = await encryptPassword(userData.password).catch((err: Error) => {
    res.status(400).send({ message: err.message });
  });

  res.send(enc);
});

router.post("/", (req: Request<UserData>, res) => {
  const userData: UserData = req.body;
  userData.password = bcrypt.hashSync(userData.password, 10);
  User.create(userData)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});

router.put("/", (req, res) => {
  const userData: UserData = req.body;

  User.update(userData, { where: { id: userData.id } })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});

router.get("/", (req, res) => {
  const userData: UserData = req.body;
  if (!userData.id) {
    User.findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error: any) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    User.findOne({ where: { id: userData.id } }).then((user) => {
      res.status(200).send(user);
    });
  }
});

router.delete("/", (req, res) => {
  const userData: UserData = req.body;

  User.findOne({ where: { id: userData.id } })
    .then((user) => {
      user
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

export { router as authUserRoutes };
