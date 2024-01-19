import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { Button, TextField, Typography } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";

//import { loginUser, auth } from "../firebaseConfig.js";
//import "../css/Login.css";
//import HomeNavbar from "./HomeNavbar.js";
import Navbar from "../components/navbar.jsx";
import Login from "../components/login.jsx";

const Signin = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    // const handleLogin = () => {
    //     loginUser(email, password);
    //     const user = auth.currentUser;
    //     localStorage.setItem("currentUser", JSON.stringify(user));
    // };

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             // User is logged in, navigate to dashboard
    //             navigate("/dash");
    //         }
    //     });

    //     // Cleanup the subscription
    //     return () => unsubscribe();
    // }, [navigate]);

    return (
        <div>
            <Navbar />
            <Login/>
        </div>
    );
};

export default Signin;
