import React, { useEffect, useState } from "react";

const useLimitedItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://zoho-inventory-server.up.railway.app/limiteditems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useLimitedItem;
