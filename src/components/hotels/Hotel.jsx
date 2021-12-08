import React, {useContext,useState} from 'react';
import cl from "../flights/Flight.module.css"
import axios from "axios";
import {AuthContext} from "../../context";
import ModalWindow from "../modalWindow/ModalWindow";
import Button from "../intro/Button";

const Hotel = (props) => {

    const {admin,token} = useContext(AuthContext);

    const [modal,setModal] = useState(false)
    const [inp1,setInp1] = useState(null);
    const [inp2,setInp2] = useState(null);

    async function bookHotel(event,id,price,inp1,inp2){
        try{
            event.preventDefault();
            const response = await axios.post('/bookings/hotel',{
                    room_price: price,
                    hotel_id: id,
                    arrival_date:inp1,
                    departure_date:inp2
                },
                {
                    headers:{'Authorization':`Bearer ${token}`}
                });
            console.log(response);
            setInp1(null);
            setInp2(null);
        }catch(e)
        {
            console.log(e);
        }
    }


    async function deleteHotel(event,id){
        try{
            event.preventDefault();
            const response = await axios.delete('/hotels',{
                headers:{"Authorization":`Bearer ${token}`},
                params:{
                    hotel_id:id
                }
            });
            console.log(response);
        }catch(e)
        {
            console.log(e);
        }
    }

    const showModal = (state) => {
        setModal(state);
    }

    return (
        <div>
            <div className = {cl.flight}>
                <strong className={cl.company}>
                    Отель - {props.hotel.hotel_name}
                </strong>
                <div className={cl.card}>
                    <div>
                         Страна: {props.hotel.hotel_country}
                    </div>
                    <div>
                        Город: {props.hotel.hotel_city}
                    </div>
                </div>
                <div className={cl.card}>
                    <div>
                        Цена:  {props.hotel.room_price}
                    </div>
                    <div>

                    </div>
                </div>
                {admin
                    ?
                    <div>
                        <p onClick = {(e) => {deleteHotel(e,props.hotel.hotel_id);props.fetchHotels(e)}} className = {cl.delete}/>
                    </div>
                    : null}
                <ModalWindow visible={modal} setVisible={setModal}>
                    <h3>Дата заезда</h3>
                    <input value = {inp1} onChange = {(e) => setInp1(e.target.value)} type='date'/>
                    <h3>Дата выезда</h3>
                    <input value = {inp2} onChange = {(e) => setInp2(e.target.value)} type='date'/>
                    <div onClick = {(e) => {bookHotel(e,props.hotel.hotel_id,props.hotel.room_price,inp1,inp2)}}>
                        <Button button = {{title:"Submit", class:"btn btn3", click: ()=>{}, showText:()=>{}}}/>
                    </div>
                </ModalWindow>
                <p onClick = {() => showModal(true)} className = {cl.buy}> BUY </p>
            </div>
        </div>
    );
};

export default Hotel;