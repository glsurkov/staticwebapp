import React from 'react';
import Button from "../intro/Button";
import cl from "./SignForm.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const SignForm = ({type}) => {

    return (
        <div className = {cl.SignForm} >
            {type === 'Sign In' ? (<SignInForm/>) : (<SignUpForm/>)}
            <Button button = {{title:"Submit", class:"btn3", click: ()=>console.log("Отправлено"), showText:()=>{}}}/>
        </div>
    );
};

export default SignForm;