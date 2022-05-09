import React from 'react';
import sendingGif from '../../images/sending/sening.gif'
import './Sending.css'

const Sending = () => {
    return (
        <div className='sending'>
            <img src={sendingGif} alt="" />
        </div>
    );
};

export default Sending;