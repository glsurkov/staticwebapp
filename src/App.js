import './styles/style.css';
import React,{useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import {AuthContext} from "./context";


function App() {

    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState(null);
    const [admin,setIsAdmin] = useState(false);

    useEffect( () => {
        if(localStorage.getItem('auth'))
        {
            setIsAuth(true);
        }
    },[])

  return (
    <AuthContext.Provider value = {
            {
                token,
                setToken,
                isAuth,
                setIsAuth,
                admin,
                setIsAdmin
            }
         }>
        <BrowserRouter>
            {/*<div className = "navbar">
                <div className = "navbar__links">
                    <Link to = "/about"> О сайте</Link>
                    <Link to = "/registerpage"> мэйн</Link>
                </div>
        <   /div>*/}
            <AppRouter/>
        </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
