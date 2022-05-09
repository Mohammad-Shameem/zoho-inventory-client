import React from 'react';
import loading from '../../../images/loading/bird-loading.gif'
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={loading} alt="" />

        </div>
    );
};

export default Loading;