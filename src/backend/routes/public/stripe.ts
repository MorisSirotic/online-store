import { log } from "console";
import { Router } from "express";
import { Stripe } from "stripe";

const { STRIPE_PRIVATE_KEY } = process.env;

const stripe = new Stripe(String(STRIPE_PRIVATE_KEY), {
  apiVersion: "2022-11-15",
});
const router = Router();

router.get("/checkout", async (req, res) => {
 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
    // metadata: {
    //   items: JSON.stringify(formattedItems),
    //   sessId: String(session),
    // },
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
});

export { router as publicStripe };
