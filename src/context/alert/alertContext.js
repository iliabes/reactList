import {createContext  } from "react";


//createContext Механизм кот передает данные из однного комп в другой менуя промежутчные компоненты
//создаем const чтото =  create context =>  оборачиваем компонент или родительский компонент в чтото.Prodider value={{val1:'val1', val2:'val2'}}
//а там где надо передать оборачиваем в чтото.Cunsummer = > ({val1,val2} ) => {return <p>val1 val2</p>}
export const AlertContext = createContext()