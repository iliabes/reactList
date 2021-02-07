
import {Notes} from '../components/notes'

export const Form = () => {
    let mass = ['apple','greed','void']
    return(
        <form>
            <div className='form-group'>
                <input className='form-control'/>
                <Notes notes={mass}/>
            </div>
        </form>
    )
}