import React, {useContext} from 'react';
import cl from "./Airport.module.css";
import {AuthContext} from "../../context";
import axios from "axios";

const Airport = (props) => {

    const {token,admin} = useContext(AuthContext);

    async function deleteAirport(event,id){
        try{
            event.preventDefault();
            const response = await axios.delete('/airports',{
                headers:{"Authorization":`Bearer ${token}`},
                params:{
                    airport_id:id
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
                    Название : {props.airport.airport_name}
                </strong>
                <div className={cl.card}>
                    <div>
                        Страна :
                        {props.airport.airport_country}
                    </div>
                    <div>
                        Город :
                        {props.airport.airport_city}
                    </div>
                </div>
                {admin
                    ?
                    <div>
                        <p onClick = {(e) => {deleteAirport(e,props.airport.airport_id);props.fetchAirports(e)}} className = {cl.delete}/>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Airport;