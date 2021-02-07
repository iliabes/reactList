
export const Notes = (notes) => {
    console.log(notes.notes)
    return(
        <ul className='list-group'>
        {notes.notes.map((item) => (
              <li className='list-group-item'>{item}<button>1</button></li>
              
        ))}
        
        </ul>
    )
}