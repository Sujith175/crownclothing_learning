import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./PaymentStyles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../Button/ButtonComponent";
import { selectCartTotal } from "../../Store/Cart/cart.selector";
import { selectCurrentUser } from "../../Store/User/user.Selector";
const Payment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
        },
      },
    });
    setIsProcessing(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
      console.log(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successfull");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessing}
          buttonType={BUTTON_TYPES_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default Payment;
