import Router, { Request } from "express";
import { Country, CountryAttributes } from "../../db/model/Country";

interface CountryData extends CountryAttributes {}

const router = Router();

router.post("/", async (req: Request<Country>, res) => {
  const countryData: CountryData = req.body;

  let country = null;

  if (countryData.id) {
    country = await Country.findOne({
      where: { id: countryData.id },
    });
  }

  if (!country) {
    Country.create(countryData)
      .then((item) => {
        res.status(201).json(item);
      })
      .catch((error: any) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    country.update({ ...countryData });

    res.send(country);
  }
});

router.put("/", (req, res) => {
  const countryData: CountryData = req.body;

  Country.update(countryData, { where: { id: countryData.id } })
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});

router.get("/", (req, res) => {
  const countryData: CountryData = req.body;

  if (!countryData.id) {
    Country.findAll()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error: any) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    Country.findOne({ where: { id: countryData.id } }).then((item) => {
      res.status(200).send(item);
    });
  }
});

router.delete("/", (req, res) => {
  const countryData: CountryData = req.body;

  Country.findOne({ where: { id: countryData.id } })
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

export { router as authCountriesRoutes };
