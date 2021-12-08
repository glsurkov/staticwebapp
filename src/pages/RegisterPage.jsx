import Intro from "../components/intro/Intro";
import Header from "../components/header/Header";
import Section from "../components/underIntro/Section";
import ModalWindow from "../components/modalWindow/ModalWindow";
import SignForm from "../components/signForm/SignForm";
import {useState} from "react";
import '../styles/style.css';


function RegisterPage() {

    const [modal, setModal] = useState(false);


    const showModal = (state) =>
    {
        setModal(state);
    }
    const [text,setText] = useState('')

    const FormType = (string) => {
        setText(string);
    }



    return (
        <div className="App">
            <ModalWindow visible = {modal} setVisible = {setModal}>
                <SignForm type = {text}/>
            </ModalWindow>
            <Header/>
            <Intro show={showModal} showText = {FormType}/>
            <Section/>
        </div>
    );
}

export default RegisterPage;
