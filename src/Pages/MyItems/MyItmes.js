import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../SharedPages/Loading/Loading';
import { toast } from 'react-toastify';
import './MyItems.css'
import PageTitle from '../SharedPages/PageTitle/PageTitle';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosSecret from '../../api/axiosSecret';


const MyItmes = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const navigate = useNavigate();

    if (loading) {
        <Loading></Loading>
    };
    const loadMyItems = async () => {
        try {
            const { data } = await axiosSecret.get(`https://arcane-caverns-12434.herokuapp.com/myitem?email=${user.email}&page=${page}&pageSize=${pageSize}`)
            setMyItems(data)

        }
        catch (error) {
            if (error.response.status === 401 || 403) {
                await signOut(auth)
                navigate('/login')

            }
        }

    };
    useEffect(() => {
        loadMyItems();
    }, [page, pageSize])

    useEffect(() => {
        fetch("https://arcane-caverns-12434.herokuapp.com/itemcount")
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, []);

    const deleteItem = (id) => {
        const url = `https://arcane-caverns-12434.herokuapp.com/item/${id}`
        const proceed = window.confirm("are you sure to delete the item???");
        if (proceed) {

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast("Item has been deleted")
                    console.log(data)
                })
        }
        // window.location.reload();

    }



    return (
        <>
            <div className='row my-item-div'>
                <PageTitle title="My Item"></PageTitle>
                <h2 className='mb-5 mt-5'>MY ITEM</h2>
                {
                    myItems.map(item =>

                        <div className='col col-md-4' key={item._id}>
                            <img style={{ width: "300px", height: "300px" }} src={item.image} />
                            <p> Email: {item.email}</p>
                            <p>Item Name: {item.name}</p>
                            <p>supplier: {item.supplier}</p>
                            <p>Item Price: {item.price}</p>
                            <p>in stock: {item.quantity}</p>
                            <button onClick={() => deleteItem(item._id)} className='delete-btn mb-5'>Delete</button>
                        </div>

                    )
                }
            </div >
            {
                [...Array(pageCount).keys()]
                    .map(number => <button
                        onClick={() => setPage(number)}
                        className={`mb-5 rounded-circle ${page === number ? "onpage" : "page-btn"}`}>{number + 1}</button>)
            }
            <select onChange={e => setPageSize(e.target.value)} className='ms-3'>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
        </>
    );
};

export default MyItmes;