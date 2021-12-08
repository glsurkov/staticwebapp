import React, {useContext, useEffect, useState} from 'react';
import cl from "../airports/Airports.module.css";
import Aviacompany from "./Aviacompany";
import {AuthContext} from "../../context";
import axios from "axios";

const Aviacompanies = (props) => {

    const {token} = useContext(AuthContext);
    const[aviacompanies,setAviacompanies] = useState([]);

    useEffect(() => {
        fetchAviacompanies();
    },[props.aviacompany]);

    async function fetchAviacompanies(){
        try{
            const response = await axios.get('/aviacompanies',{
                headers:{"Authorization":`Bearer ${token}`},
            });
            setAviacompanies(response.data)
        }catch(e){
            console.log(e);
        }
    }


    return (
        <div className = {cl.container}>
            {aviacompanies.map((aviacompany) =>
                <Aviacompany aviacompany = {aviacompany} fetchAviacompanies = {fetchAviacompanies} key={aviacompany.company_id}/>
            )}
        </div>
    );
};

export default Aviacompanies;