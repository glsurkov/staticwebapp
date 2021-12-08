import React,{useState} from 'react';
import cl from './FilterFlights.module.css';
import Button from "../intro/Button";

const FilterHotels = ({fetchHotels}) => {

    const [inp1,setInp1] = useState(null);
    const [inp2,setInp2] = useState(null);
    const [inp10,setInp10] = useState(null);
    const [inp12,setInp12] = useState(null);

    return (
        <div className = {cl.filter_container}>
            <h4>Отель</h4>
            <input value={inp1} onChange = {e => {if(e.target.value !== ''){setInp1(e.target.value)}else{setInp1(null)}}} placeholder="Название отеля" className={cl.input2}/>
            <h4>Страна</h4>
            <input value={inp2} onChange = {e => {if(e.target.value !== ''){setInp2(e.target.value)}else{setInp2(null)}}} placeholder="Название страны" className={cl.input2}/>
            <h4>Город</h4>
            <input value={inp10} onChange = {e => {if(e.target.value !== ''){setInp10(e.target.value)}else{setInp10(null)}}} className={cl.input2} placeholder="Название города"/>
            <h4>Стоимость номера</h4>
            <input value={inp12} onChange = {e => {if(e.target.value !== ''){setInp12(e.target.value)}else{setInp12(null)}}} placeholder="Стоимость" className={cl.input2}/>
            <div onClick = {(e) => {fetchHotels(e,inp1,inp2,inp10,inp12);console.log('click')}}>
                <Button button = {{title:"Submit", class:`btn btn3 ${cl.button}`, click: ()=>{}, showText:()=>{}}}/>
            </div>
        </div>
    );
};

export default FilterHotels;