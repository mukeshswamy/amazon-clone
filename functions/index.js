const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HhW7aATXo1r2sXCUFu0o2lbkwibaiyQClLqx5Tjsv2b2zmtcShylGpcCtjJuRSkuAR5jdaCm0BMAjL9RqWVEPpp00UIc7ujmC"
);
// API
// - App Config
const app = express();
// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - API routes
app.get("/", (request,response) => response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM !!!! for this amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})
// - Listen Command

exports.api = functions.https.onRequest(app) 
// Example EndPoint
// http://localhost:5001/clone-93c15/us-central1/api
