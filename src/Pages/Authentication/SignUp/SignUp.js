import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../../SharedPages/PageTitle/PageTitle';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import zoho from '../../../images/logo/header-img.png'
import './SIgnUp.css'


const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const nameRef = useRef('');
    const ageRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
        }
        else {
            toast.warn("your password didn't match", {
                position: "top-center"
            })
        };

    };

    if (error) {
        toast.error(error?.message, {
            position: "top-center"
        })
    };
    if (loading) {
        return <Loading></Loading>
    }

    const handleClose = () => {
        setShow(false);
        navigate('/home')
    }
    const handleShow = () => setShow(true);
    if (user) {
        setTimeout(() => {
            handleShow()
        }, 100);

    }


    return (
        <div>
            <PageTitle title={"Sign Up"}></PageTitle>
            <h2 className="mb-2 mt-2">Sign Up Here</h2>
            <form onSubmit={handleCreateUser} className='signup-form ' >
                <input ref={nameRef} className='signup-input-field' type="text" name="name" required placeholder='Name' /> <br />
                <input ref={ageRef} className='signup-input-field' type="number" name="age" placeholder='Age (optional)' /> <br />
                <input className='signup-input-field' type="number" name="Phone" placeholder='phone (optional)' /> <br />
                <input ref={emailRef} className='signup-input-field' type="email" name="email" required placeholder='email' /> <br />
                <input ref={passwordRef} className='signup-input-field' type="password" name="password" required placeholder='password' /><br />
                <input ref={confirmPasswordRef} className='signup-input-field' type="password" name="password" required placeholder='confirm password' /><br />
                <p>Already have an Account? <span  > <Link to="/login">click for Login</Link> </span></p>
                <div className='d-flex justify-content-center align-items-center'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" />
                    <p className='ms-3 mt-3'><span className={agree ? "text-success" : ""}>Accept Terms & Conditions</span></p>
                </div>
                <input disabled={!agree} type="submit" value="Sign Up" className='button' />
            </form >
            <div>

                <SocialLogin />

            </div>
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
        </div >

    );
};

export default SignUp;