import React, { useEffect, useState } from 'react';

const useAllItems = () => {
    const [items, setAllItems] = useState([]);
    useEffect(() => {
        fetch("https://arcane-caverns-12434.herokuapp.com/items")
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return [items]
};

export default useAllItems;