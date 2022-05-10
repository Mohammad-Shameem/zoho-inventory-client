import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr'
import { VscGithub } from 'react-icons/vsc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css'
import { toast } from 'react-toastify';

import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [token] = useToken(user);
    console.log(user)

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (user) {
        if (token) {
            navigate(from, { replace: true });
        }

    }


    if (error) {
        toast.error(error?.message, {
            position: 'top-center'
        })
    };


    return (
        <div className="mt-3 mb-5 social-login">

            <div className='line-div w-50 mx-auto d-flex justify-content-center align-items-center'>
                <div className='line-1 w-50'></div>
                <p className='p-3 mt-3'>or</p>
                <div className='line-2 w-50'></div>
            </div>
            <div className='d-flex w-50 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='google-btn d-flex mx-auto '> <FcGoogle ></FcGoogle> <h6 className="ms-3"> Google Sign In</h6> </button>
                <button className='facebook-btn d-flex mx-auto '> <GrFacebook></GrFacebook> <h6 className='ms-3'>Facebook Sign In</h6> </button>
            </div>
            <button className='github-btn d-flex mx-auto mt-3'> <VscGithub></VscGithub> <h6 className="ms-3">Git Hub Sing In</h6> </button>

        </div>
    );
};

export default SocialLogin;