import React from 'react';
import { GrFacebook } from 'react-icons/gr'
import { GrTwitter } from 'react-icons/gr'
import { SiInstagram } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { RiSnapchatLine } from 'react-icons/ri'
import { FaCopyright } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>

            <div className=' d-flex  justify-content-center align-items-center  '>
                <div className='d-flex flex-column justify-content-center align-items-center pt-5 '>
                    <h6>Kepp In Touch</h6>
                    <div className='footer-line-div'>
                    </div>


                </div>
            </div>

            <div className='mt-2' >

                <GrFacebook className='icon'  ></GrFacebook>
                <GrTwitter className='icon' ></GrTwitter>
                <SiInstagram className='icon'  ></SiInstagram>
                <BsLinkedin className='icon' ></BsLinkedin>
                <RiSnapchatLine className='icon'  ></RiSnapchatLine>
            </div>
            <div className='d-flex justify-content-center align-items-center copyright'>
                <h6 className='me-2'>copyright  </h6>
                <FaCopyright className='me-3' ></FaCopyright>
                <h6 className='me-2'>{(new Date().getFullYear())}</h6>
                <h6>zoho-inventory</h6>
            </div>
        </div>
    );
};

export default Footer;