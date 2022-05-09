import React, { useEffect, useState } from 'react';

const useDeliverItem = (itemId) => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://arcane-caverns-12434.herokuapp.com/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);


    return [item, setItem]
};

export default useDeliverItem;
