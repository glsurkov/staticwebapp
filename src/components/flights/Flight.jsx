import React, {useContext} from 'react';
import cl from "./Flight.module.css"
import axios from "axios";
import {AuthContext} from "../../context";

const Flight = (props) => {

    const {token,admin} = useContext(AuthContext);

    async function bookFlight(event,id,price){
        try{
            event.preventDefault();
            const response = await axios.post('/bookings/flight',{
                ticket_price: price,
                flight_id: id
            },
                {
                headers:{'Authorization':`Bearer ${token}`}
            });
            console.log(response);
        }catch(e)
        {
            console.log(e);
        }
    }



    async function deleteFlight(event,id){
        try{
            event.preventDefault();
            const response = await axios.delete('/flights',{
                headers:{"Authorization":`Bearer ${token}`},
                params:{
                    flight_id:id
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
                <div className={cl.flight}>
                    <strong className={cl.company}>
                        Компания : {props.flight.aviacompany.company_name}
                        {props.flight.tickets_in_stock === 0 ? <h2>БИЛЕТОВ НЕТ</h2> : null}
                    </strong>
                    <div className={cl.card}>
                        <div>
                            Дата и время вылета :
                            <br/>
                            {props.flight.departure_date.slice(0, 10)} {props.flight.departure_time.slice(0, 5)}
                        </div>
                        <div>
                            Вылет из : {props.flight.departure_airport.airport_name}
                        </div>
                    </div>
                    <div className={cl.card}>
                        <div>
                            Дата и время прилета:
                            <br/>
                            {props.flight.arrival_date.slice(0, 10)} {props.flight.arrival_time.slice(0, 5)}
                        </div>
                        <div>
                            Прилет в : {props.flight.arrival_airport.airport_name}
                        </div>
                    </div>
                    <div className={cl.card}>
                        Цена билета : {props.flight.ticket_price}
                    </div>
                    {admin
                        ?
                        <div>
                            <p onClick={(e) => {
                                deleteFlight(e, props.flight.flight_id);
                                props.fetchFlights(e)
                            }} className={cl.delete}/>
                        </div>
                        : null}
                    <p onClick={(e) => {
                        bookFlight(e, props.flight.flight_id, props.flight.ticket_price)
                    }} className={cl.buy}> BUY </p>
                </div>
            </div>
        );
};

export default Flight;