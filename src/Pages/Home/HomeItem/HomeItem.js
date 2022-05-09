import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLimitedItem from '../../Hooks/useLimitedItem';
import './HomeItem.css'

const HomeItem = () => {
    const [items] = useLimitedItem();
    const navigate = useNavigate();
    const handelItemUpdate = (id) => {
        console.log(id)
        navigate(`/updateItem/${id}`)
    }
    return (
        <>
            <h2 className='mt-5 mb-5'>INVENTORY</h2>
            <div className='item-container' id='home-item' >
                {
                    items.map(item =>

                        <div
                            key={item._id}
                            className=' row mb-5'>
                            <div className='col-sm col-md-7'>
                                <img src={item.img} style={{ width: "520px", height: "320px" }} alt="" />
                            </div>
                            <div className='item-details col-sm col-md-5'>
                                <h5>Name:- {item.name}</h5>
                                <p>Product Info : {`${item.description}`}</p>
                                <h6>Price : {item.price}</h6>
                                <p>Supplier : {item.supplier}</p>
                                <h6>Quantity : {item.quantity}</h6>
                                <button className='update-btn' onClick={() => handelItemUpdate(item._id)} >Stock Update</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to={"/inventory"}><button className="button mb-5 mt-5">Manage Inventories</button></Link>
        </>
    );
};

export default HomeItem;