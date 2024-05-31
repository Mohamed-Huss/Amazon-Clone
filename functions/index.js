/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PF78RBx1Zu3Yl59PniUlApg3JvOybAp1BMLjdP5gdus8Svh16cVooEEphP6zHmWgM0i4SuZ5TOmvJ0Ph9vV4FiG00DMJWj4xx");

// - App config
const app = express();

// - Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/clone-5079b/us-central1/api
