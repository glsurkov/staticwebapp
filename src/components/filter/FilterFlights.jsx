import React,{useState} from 'react';
import cl from './FilterFlights.module.css';
import Button from "../intro/Button";

const FilterFlights = ({fetchFlights}) => {

    const [inp1,setInp1] = useState(null);
    const [inp2,setInp2] = useState(null);
    const [inp3,setInp3] = useState(null);
    const [inp4,setInp4] = useState(null);
    const [inp5,setInp5] = useState(null);
    const [inp7,setInp7] = useState(null);
    const [inp8,setInp8] = useState(null);
    const [inp10,setInp10] = useState(null);
    const [inp12,setInp12] = useState(null);
    const [inp13,setInp13] = useState(null);

    return (
        <div className = {cl.filter_container}>
            <h4>Авиакомпания</h4>
            <input value={inp1} onChange = {e => {if(e.target.value !== ''){setInp1(e.target.value)}else{setInp1(null)}}} placeholder="Название авиакомпании" className={cl.input2}/>
            <h4>Страна вылета</h4>
            <input value={inp2} onChange = {e => {if(e.target.value !== ''){setInp2(e.target.value)}else{setInp2(null)}}} placeholder="Название страны" className={cl.input2}/>
            <h4>Страна прилета</h4>
            <input value={inp3} onChange = {e => {if(e.target.value !== ''){setInp3(e.target.value)}else{setInp3(null)}}} placeholder="Название страны" className={cl.input2}/>
            <div className={cl.date_time}>
                <div>
                    <h4>Дата вылета</h4>
                    <input value={inp4} onChange = {e => {if(e.target.value !== ''){setInp4(e.target.value)}else{setInp4(null)}}} className={cl.input2} type="date"/>
                    <h4>Время вылета</h4>
                    <div>
                        <input value={inp5} onChange = {e => {if(e.target.value !== ''){setInp5(e.target.value)}else{setInp5(null)}}} className={cl.input2} type="time"/>
                    </div>
                </div>
                <div>
                    <h4>Дата прилета</h4>
                    <input value={inp7} onChange = {e => {if(e.target.value !== ''){setInp7(e.target.value)}else{setInp7(null)}}} className={cl.input2} type="date"/>
                    <h4>Время прилета</h4>
                    <div>
                        <input value={inp8} onChange = {e => {if(e.target.value !== ''){setInp8(e.target.value)}else{setInp8(null)}}} className={cl.input2} type="time"/>
                    </div>
                </div>
            </div>
            <h4>Цена</h4>
            <input value={inp10} onChange = {e => {if(e.target.value !== ''){setInp10(e.target.value)}else{setInp10(null)}}} className={cl.input2} placeholder="Цена"/>
            <h4>Аэропорт вылета</h4>
            <input value={inp12} onChange = {e => {if(e.target.value !== ''){setInp12(e.target.value)}else{setInp12(null)}}} placeholder="Аэропорт вылета" className={cl.input2}/>
            <h4>Аэропорт прилета</h4>
            <input value={inp13} onChange = {e => {if(e.target.value !== ''){setInp13(e.target.value)}else{setInp13(null)}}} placeholder="Аэропорт прилета" className={cl.input2}/>
            <div onClick = {(e) => {fetchFlights(e,inp1,inp2,inp3,inp4,inp5,inp7,inp8,inp10,inp12,inp13);console.log('click')}}>
            <Button button = {{title:"Submit", class:`btn btn3 ${cl.button}`, click: ()=>{}, showText:()=>{}}}/>
            </div>
        </div>
    );
};

export default FilterFlights;