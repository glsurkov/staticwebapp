import React, {useContext, useState} from 'react';
import cl from "../signForm/SignForm.module.css";
import Button from "../intro/Button";
import {AuthContext} from "../../context";
import axios from "axios";

const CreateHotel = () => {

    const [name,setName] = useState()
    const [country,setCountry] = useState()
    const [city,setCity] = useState()
    const [price,setPrice] = useState()
    const [numbers,setNumbers] = useState()

    const {token} = useContext(AuthContext)

    async function addHotel(){
        try {
            const response = await axios.post('/hotels',{
                hotel_country:`${country}`,
                room_price:price,
                rooms_in_stock:numbers,
                hotel_name:`${name}`,
                hotel_city:`${city}`
            },{headers:{"Authorization":`Bearer ${token}`}})
            console.log(response);
            setCity('');
            setName('');
            setCountry('');
            setNumbers('');
            setPrice('');
        }catch(e)
        {
            console.log(e);
        }
    }

    return (
        <div className={cl.SignForm}>
            <input value = {name} onChange = {e => setName(e.target.value)} className = {cl.Input} placeholder="Название отеля"/>
            <input value = {country} onChange = {e => setCountry(e.target.value)} className = {cl.Input} placeholder="Страна"/>
            <input value = {city} onChange = {e => setCity(e.target.value)} className = {cl.Input} placeholder="Город"/>
            <input value = {price} onChange = {e => setPrice(e.target.value)} className = {cl.Input} placeholder="Цена номера"/>
            <input value = {numbers} onChange = {e => setNumbers(e.target.value)} className = {cl.Input} placeholder="Количество номеров"/>
            <div onClick = {addHotel}>
                <Button button = {{title:"Submit", class:"btn btn3", click: ()=>{}, showText:()=>{}}}/>
            </div>
        </div>
    );
};

export default CreateHotel;