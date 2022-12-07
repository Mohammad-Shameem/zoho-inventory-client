import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../SharedPages/Loading/Loading";
import "./AddItemNew.css";
const AddNewItem = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.itemName.value;
    const email = event.target.email.value;
    const price = event.target.itemPrice.value;
    const quantity = event.target.itemQuantity.value;
    const supplier = event.target.supplier.value;
    const image = event.target.itemImage.value;
    const item = {
      email: email,
      name: name,
      price: `$${price}`,
      quantity: quantity,
      supplier: supplier,
      image: image,
    };
    fetch("https://zoho-inventory-server.up.railway.app/item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Your Item Add Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
  };
  return (
    <div>
      <h1>Add Your Item</h1>
      <form onSubmit={handleAddItem}>
        <input
          className="add-item-input-field"
          type="email"
          name="email"
          value={user?.email}
          readOnly
        />{" "}
        <br />
        <input
          className="add-item-input-field"
          type="text"
          name="itemName"
          placeholder="Item Name"
          required
        />{" "}
        <br />
        <input
          className="add-item-input-field"
          type="number"
          name="itemPrice"
          placeholder="Item price"
          required
        />
        <br />
        <input
          className="add-item-input-field"
          type="number"
          name="itemQuantity"
          placeholder="Item qunatity"
          required
        />
        <br />
        <input
          className="add-item-input-field"
          type="text"
          name="supplier"
          placeholder="supplier"
          required
        />
        <br />
        <input
          className="add-item-input-field"
          type="url"
          name="itemImage"
          placeholder="item image url"
          required
        />
        <br />
        <input className="button mb-5" type="submit" value="Add Item" />
        <br />
      </form>
    </div>
  );
};

export default AddNewItem;
