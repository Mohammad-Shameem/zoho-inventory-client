
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import Sending from '../Sending/Sending';
import Loading from '../SharedPages/Loading/Loading'
import zoho from '../../images/logo/header-img.png'
import './RequireAuth.css'



const RequireAuth = ({ children }) => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        navigate('/home')
    }
    const handleShow = () => setShow(true);

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth)
    const location = useLocation()



    if (loading) {
        return <Loading></Loading>
    }
    if (sending) {
        return <Sending></Sending>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    if (user.providerData[0].providerId === "password") {
        if (!user.emailVerified) {


            return <div className='require '>
                <div className='main-div'>
                    <div className='d-flex  justify-content-center align-items-center logo-div'>
                        <img style={{ width: "90px", height: "90px" }} src={zoho} alt="" />
                        <h6 className='font-italic mt-2 ms-2'>
                            Zoho-Inventory
                        </h6>
                    </div>


                    <h4 className='mt-5'>Verify Your Email</h4>
                    <h6 className='mt-3 text-center'>Please click the button bellow to verify email</h6>


                    <button className='button mt-5'
                        onClick={async () => {
                            await sendEmailVerification();
                            handleShow()
                        }}
                    >
                        Verify Email
                    </button>
                    <hr className='mt-5' />
                    <p>Questions? Get your Answer Here: <a href="">Help center</a></p>
                </div>
                <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <img style={{ width: "50px", height: "50px", border: "2px solid #0B0B45" }} className="rounded-circle me-2" src={zoho} alt="" />

                            <Modal.Title>ZOHO INVENTORY</Modal.Title>

                        </Modal.Header>
                        <h6 className='p-5'>your email verification has been sent sir/mam, check you Gmail inbox or spam to get the verification Mail. Please verify your email to access our Automated Inventory System.
                        </h6>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal>
                </>
            </div>



        }

    };

    return children;
};

export default RequireAuth;