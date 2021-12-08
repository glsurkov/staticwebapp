import React,{useContext} from 'react';
import cl from "../airports/Airport.module.css";
import {AuthContext} from "../../context";
import axios from "axios";

const Aviacompany = (props) => {

    const {admin,token} = useContext(AuthContext);

    async function deleteAviacompany(event,id){
        try{
            event.preventDefault();
            const response = await axios.delete('/aviacompanies',{
                headers:{"Authorization":`Bearer ${token}`},
                params:{
                    company_id:id
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
                    Название : {props.aviacompany.company_name}
                </strong>
                <div className={cl.card}>
                    <div>
                        Телефон :
                        {props.aviacompany.company_phone}
                    </div>
                    <div>
                        Рейтинг :
                        {props.aviacompany.company_raiting}
                    </div>
                </div>
                {admin
                    ?
                    <div>
                        <p onClick = {(e) => {deleteAviacompany(e,props.aviacompany.company_id);props.fetchAviacompanies(e)}} className = {cl.delete}/>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Aviacompany;