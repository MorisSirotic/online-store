import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ReactNode, useEffect, useState } from "react";
import { axPublic } from "../axios/axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51MuJc4I5TlZGfanfJ9dSVLAOfKI19YuBJjO6M6lg45gnv5FHre1z83zynlthMoFqHHgE9k8P1Ixa601CpXzJmBLm00AmNd4kRo"
);
interface StripeWrapperProps {
  children: ReactNode;
}
export const StripeWrapper = (props: StripeWrapperProps) => {
  const [clientSecret, setClientSecret] = useState<string>();

  useEffect(() => {
    axPublic.get("/stripe/checkout").then((res) => {
      setClientSecret(res.data.clientSecret);
      console.log(res);
    });
  }, []);

  return (
    <div>
      {clientSecret && (
        <Elements
          key={clientSecret}
          options={{ clientSecret, appearance: { theme: "stripe" } }}
          stripe={stripePromise}
        >
          {props.children}
        </Elements>
      )}
    </div>
  );
};
