import { HIDE_ALERT,SHOW_ALERT } from "../types"


// для чего спред - скороей всего для обьединения массивов
const handlers = {
    [SHOW_ALERT] : (state,{payload}) =>  ({...payload,visible:true}),
    [HIDE_ALERT] : (state) =>  ({...state,visible:true}),
    DEFAULT :state => state
}

export const alertReduser = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle[state , action]
}
