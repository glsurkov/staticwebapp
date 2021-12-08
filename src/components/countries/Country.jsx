import React, {useContext, useEffect} from 'react';
import cl from "../airports/Airport.module.css";
import axios from "axios";
import {AuthContext} from "../../context";


const Country = (props) => {

    const {token,admin} = useContext(AuthContext);

    async function deleteCountry(event,name){
        try{
            event.preventDefault();
            const response = await axios.delete('/countries',{
                headers:{"Authorization":`Bearer ${token}`},
                params:{
                    country_name:name
                }
            });
            console.log(response);
        }catch(e)
        {
            console.log(e);
        }
    }

    return (
        <div>
            <div className = {cl.airport}>
                <strong className={cl.company}>
                    Название : {props.country.country_name}
                </strong>
                <div className={cl.card}>
                    <div>
                        Численность населения :
                        {props.country.population}
                    </div>
                    <div>
                        Столица :
                        {props.country.capital_city}
                    </div>
                </div>
                {admin
                    ?
                    <div>
                        <p onClick = {(e) => {deleteCountry(e,props.country.country_name);props.fetchCountries(e)}} className = {cl.delete}/>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Country;