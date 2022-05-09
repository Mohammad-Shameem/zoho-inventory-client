import React, { useEffect, useState } from 'react';

const useLimitedItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://arcane-caverns-12434.herokuapp.com/limiteditems")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useLimitedItem;