import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Generate The special stripe secret which allows us to charge a Customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripes Expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }
      }).then(({paymentIntent}) => {
        //   PaymentIntent = payment confirmation
          setSucceeded(true);
          setError(null)
          setProcessing(false);
          history.replace('/orders');
      })
  };
  const handelChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>#12/144</p>
            <p>Bangalore</p>
          </div>
        </div>
        {/* Revire Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* Products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                ratinf={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Strip magic will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handelChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        <strong>ORDER TOTAL:{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing..</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* ERROR */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
