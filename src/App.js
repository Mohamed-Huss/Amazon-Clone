import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Context/contextProvider";
import { auth } from "./firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import toast, { Toaster } from 'react-hot-toast';

const promise = loadStripe(
  "pk_test_51PF78RBx1Zu3Yl59q0f16A3c0KCRemqjnYuKVmue8JX6Am7ALWvOOMHxdhq6veK3a2nFNphw762w36Gkkpcamc9m00Ed8zgAlU"
);

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: "true", element: <Home /> },
      { path: "/Checkout", element: <Checkout /> },

      {
        path: "/payment",
        element: (
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        ),
      },
      { path: "orders", element: <Orders /> },
      { path: "*", element: <Notfound /> },
    ],
  },
  { path: "/Login", element: <Login /> },
]);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return <RouterProvider router={routers}>

  </RouterProvider>;
}

export default App;
