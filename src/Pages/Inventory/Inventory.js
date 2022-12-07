import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAllItems from "../Hooks/useAllItems";
import PageTitle from "../SharedPages/PageTitle/PageTitle";
import "./inventory.css";

const Inventory = () => {
  const [items] = useAllItems();
  const handleDeleteItem = (id) => {
    const url = `https://zoho-inventory-server.up.railway.app/item/${id}`;
    const proceed = window.confirm("are you sure");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item has been deleted");
          console.log(data);
        });
    }
    window.location.reload();
  };
  return (
    <div>
      <PageTitle title="Inventory"></PageTitle>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <>
              <tr>
                {items.indexOf(item) + 1}
                <td>{item.name}</td>
                <td>{item.supplier}</td>
                <td>{item.price}</td>
                <td>{item.sold}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <Link to={"/addnewitem"}>
        <button className="button mb-5">Add New Item</button>
      </Link>
    </div>
  );
};

export default Inventory;
