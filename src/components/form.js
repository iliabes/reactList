import React ,{createContext,useState} from "react";
import {Notes} from '../components/notes'


export const Form = () => {
    const [value, setValue] = useState();

    const submitHandler = event => {
        event.preventDefault();
    }
    
    let mass = ['apple','greed','void']
    return(
        <form onSubmit = {submitHandler}>
            <div className='form-group'>
                <input className='form-control'
                type='text'
                placeholder="text"
                value={value}
                onChange = {e => {setValue(e.target.value)}}
                />
                <Notes notes={mass}/>
            </div>
        </form>
    )
}