import React from "react";
import { useState, useEffect } from "react";
import "./planScreen.css";
import db from "../firebase";
import { useSelector } from "react-redux";
import {loadStripe} from "@stripe/stripe-js"

const PlanScreen = () => {

    const [products, setProducts] = useState([]);
    const user = useSelector(state => state.user.user);
    const [subscription, setSubscription] = useState(null);
    useEffect(() => {
      db.collection("customers").doc(user.uid).collection("subscriptions").get().then(querySnapshot => {
        querySnapshot.forEach(async (subscription) => {
            setSubscription({
                role: subscription.data().role,
                current_period_end: subscription.data().current_period_end.seconds,
                current_period_start: subscription.data().current_period_start.seconds,
            })
        })
      })
    

    }, [user.uid])
    console.log(subscription);

    useEffect(()=>{
      db
        .collection("products")
        .where("active", "==", true)
        .get()
        .then((querySnapshot) => {
          const products = {};
          querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").get();
            priceSnap.docs.forEach((price) => {
              products[productDoc.id].prices = {
                priceId: price.id,
                priceData: price.data(),
              };
            });
          });
          setProducts(products);
        })
    },
      []);
  
  console.log(products);


  const loadCheckout = async (priceID) => {
    const docRef = await db.collection("customers").doc(user.uid).collection("checkout_sessions").add({
        price: priceID,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    })

  docRef.onSnapshot(async(snap)=> {
    const {error, sessionId} = snap.data();
    if (error) {
        alert( `An error occured: ${error.message}`)
    }
    if(sessionId) {
        const stripe = await loadStripe('pk_test_51NWpwnCJvVdcxdv8UJunAQlY6UinoUo9EgTiqroodSSDNdhVWchqfo2NRffVLEDEG6KIH5oj4ZEVs0JCsuHzcxG800ymQUbF0c');
        stripe.redirectToCheckout({sessionId});
    }

  });
};





  return (
  
  <div className="planScreen">
  {Object.entries(products).map(([productId, productData]) => {
const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);
    return (
        <div key={productId} className="plansScreen_plan">
            <div className="planScreen_info">
              <h5> {productData.name}</h5> 
              <h6>  {productData.description}</h6>
            </div>

            <button onClick={ () => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>{isCurrentPackage ? `Current Package` : "Subscribe"}</button>
        </div>
    )
  })}
  </div>
  );
};

export default PlanScreen;
