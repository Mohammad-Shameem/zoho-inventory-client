
import React, { useEffect, useState } from 'react';
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


            return <div className='require'>
                <h2 className='text-danger'>Your Email is not Verified </h2>
                <h3 className='tex-success'>Please Verify your Email</h3>
                <button className='button'
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                    Verify email
                </button>

            </div>



        }

    };
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
            <h6 className='p-5'>Its a pleasure to see you here. Thanks a lot to join us. <br />
                your Email verification has benn sent, please check your <br />
                inbox and confirm verification.
            </h6>

            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal>
    </>
    return children;
};

export default RequireAuth;