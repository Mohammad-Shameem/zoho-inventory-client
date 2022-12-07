import React, { useEffect, useState } from "react";

const useAllItems = () => {
  const [items, setAllItems] = useState([]);
  useEffect(() => {
    fetch("https://zoho-inventory-server.up.railway.app/items")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);
  return [items];
};

export default useAllItems;
