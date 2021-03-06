import React, {useState, useContext, useEffect} from 'react';
import cl from "./Airports.module.css";
import Airport from './Airport'
import axios from "axios";
import {AuthContext} from "../../context";

const Airports = (props) => {

    const {token} = useContext(AuthContext);
    const[airports,setAirports] = useState([]);
    useEffect(() => {
        fetchAirports();
    },[props.airport])

    async function fetchAirports(){
        try{
            const response = await axios.get('/airports',{
                headers:{"Authorization":`Bearer ${token}`},
            });
            setAirports(response.data)
        }catch(e){

        }
    }


    return (
        <div className = {cl.container}>
            {airports.map((airport) =>
                <Airport airport = {airport} fetchAirports = {fetchAirports} key={airport.airport_id}/>
            )}
        </div>
    );
};

export default Airports;