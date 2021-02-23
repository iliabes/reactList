import React ,{createContext,useContext,useState} from "react";
import {Notes} from '../components/notes'
import { AlertContext } from "../context/alert/AlertContext";

//onSubmit на форм запускает sumbitHender , при нажатии энтер const value задавется знач input 
// потом идет проверка на пустую строку и в завис от этого запускается алерт



export const Form = () => {
    const [value, setValue] = useState();

    const alert = useContext(AlertContext)

    const submitHandler = event => {
        console.log(value)
        event.preventDefault();
        if(value.trim()) {
            alert.show('Замаетка есть', 'succes')
            setValue('')
        }else{
            console.log('else')
            alert.show('input task')
        }
    }
    let mass = ['apple','greed','void']
    // для алертов в onSubmit submitHandler
    return(
        <form >
            <div className='form-group'>
                <input className='form-control'
                type='text'
                placeholder="text"
                value={value}
                onChange = {e => {setValue(e.target.value)}}
                />
                {/* <Notes notes={mass}/> */}
            </div>
        </form>
    )
}