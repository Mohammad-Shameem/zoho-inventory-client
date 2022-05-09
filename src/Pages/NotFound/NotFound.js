import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfoundgif from '../../images/Not Found/404.gif'
import './NotFound.css'
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='notfound'>
            <img src={notfoundgif} alt="" />
            <button className='notfound-btn' onClick={() => navigate('/home')}>Go to Home</button>
        </div>
    );
};
export default NotFound;