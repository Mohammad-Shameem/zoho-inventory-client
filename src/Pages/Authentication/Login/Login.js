import { async } from "@firebase/util";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Sending from "../../Sending/Sending";
import Loading from "../../SharedPages/Loading/Loading";
import PageTitle from "../../SharedPages/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import zoho from "../../../images/logo/header-img.png";
import "./Login.css";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };
  const handleShow = () => setShow(true);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    toast(error.message, {
      position: "top-center",
    });
  }
  if (token) {
    navigate(from, { replace: true });
  }

  const sendPaswordResetMail = async () => {
    const email = emailRef.current.value;
    if (error1) {
      toast(error1?.message, {
        position: "top-center",
      });
      return;
    } else if (email) {
      toast(
        "Reset password link has been sent. Please check your mail box and follow the instruction to reset password.",
        {
          position: "top-center",
        }
      );
      await sendPasswordResetEmail(email);
      handleShow();
    } else if (!email) {
      toast(
        "please atleast put your email into input field to get password reset link",
        {
          position: "top-center",
        }
      );
    }
  };
  if (sending) {
    return <Sending></Sending>;
  }
  return (
    <div>
      <h2 className="mb-5">Login Please !</h2>

      <PageTitle title={"Login"}></PageTitle>
      <div className="w-50 mx-auto mt-5 login-form">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              className="input-field"
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              className="input-field"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <p>
            New Here ?{" "}
            <span>
              <Link to="/signup">create a account</Link>{" "}
            </span>
          </p>
          <p>
            Forgot password ?{" "}
            <span
              onClick={sendPaswordResetMail}
              className="text-danger reset-text"
            >
              Reset Now !
            </span>
          </p>
          <input type="submit" value="Log In" className="button " />
        </Form>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <img
            style={{
              width: "50px",
              height: "50px",
              border: "2px solid #0B0B45",
            }}
            className="rounded-circle me-2"
            src={zoho}
            alt=""
          />

          <Modal.Title>ZOHO INVENTORY</Modal.Title>
        </Modal.Header>
        <h6 className="p-5">
          your password reset mail has been sent. <br />
          please check your gamil inbox. <br />
          if you dont find the link check it in spam. <br />
          Thank You!
        </h6>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>

      <SocialLogin />
    </div>
  );
};

export default Login;
