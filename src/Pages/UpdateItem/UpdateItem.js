import React from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useDeliverItem from "../Hooks/useDeliverItem";
import PageTitle from "../SharedPages/PageTitle/PageTitle";
import "./UpdateItem.css";

const UpdateItem = () => {
  const { itemId } = useParams();
  const [item] = useDeliverItem(itemId);
  const { img, name, _id, description, supplier, price, quantity, sold } = item;

  const updateQuantity = (_id) => {
    const previousQuantity = parseInt(quantity);
    const newQuantity = { quantity: previousQuantity - 1 };
    const previousSold = parseInt(sold);
    const newSold = { sold: previousSold + 1 };
    const update = { newSold, newQuantity };
    if (previousQuantity >= 1) {
      fetch(
        `https://zoho-inventory-server.up.railway.app/deliveredItem/${_id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(update),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };
  const restockItems = (event) => {
    event.preventDefault();
    const itemQuantity = parseInt(event.target.number.value);
    const previousQuantity = parseInt(quantity);
    const newQuantity = { quantity: previousQuantity + itemQuantity };
    fetch(`https://zoho-inventory-server.up.railway.app/deliveredItem/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error", error);
      });
    event.target.reset();
  };

  return (
    <>
      <div className="updateItem-container">
        <PageTitle title="updateItem"></PageTitle>
        <h1 className="mb-5 mt-5">Restoce & Deliver Item </h1>
        <div>
          <img style={{ width: "450px", height: "400px" }} src={img} alt="" />
        </div>
        <div>
          <h4>{_id}</h4>
          <h3>Name: {name}</h3>
          <h5>price {price}</h5>
          <h5>Quantity: {quantity}</h5>
          <h5>sold: {sold}</h5>
          <p className="w-50 mx-auto"> Product info: {description}</p>
          <h5>Supplier: {supplier}</h5>
          <div className="d-flex button-div">
            <button className="button ms-5" onClick={() => updateQuantity(_id)}>
              Delivered
            </button>
            <Link to={"/inventory"}>
              <button className="button ms-5">Manage Inventories</button>
            </Link>
          </div>
        </div>
      </div>
      <form onSubmit={restockItems}>
        <input
          className="restock-items-field"
          type="number"
          name="number"
          id=""
          placeholder="restock items"
          required
        />{" "}
        <br />
        <input
          type="submit"
          value="Restock Items"
          className="button mt-5 mb-5"
        />
      </form>
    </>
  );
};

export default UpdateItem;
