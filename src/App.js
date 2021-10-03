import Intro from "./components/intro/Intro";
import Header from "./components/header/Header";
import Section from "./components/underIntro/Section";
import ModalWindow from "./components/modalWindow/ModalWindow";
import SignForm from "./components/signForm/SignForm";
import {useState} from "react";
import Container from "./components/Container";


function App() {

    const [modal, setModal] = useState(false);

    const showModal = (state) =>
    {
        setModal(state);
    }
    const FormType = (text) =>
    {
        return text;
    }

  return (
    <div className="App">
        <ModalWindow visible = {modal} setVisible = {setModal}>
            <SignForm/>
        </ModalWindow>
        <Header/>
        <Intro show={showModal}/>
        <Section/>
    </div>
  );
}

export default App;
