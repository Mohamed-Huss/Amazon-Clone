import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "../../Context/contextProvider";
import Order from "../Order/Order";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="order__order">
        {console.log(orders)}
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
