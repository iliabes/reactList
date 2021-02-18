import React, {useReducer} from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import {AlertContext} from './AlertContext'
import {alertReduser} from './AlertReduser'


//хранит много состояний и на основе предыдущих выдает новое
//редюсер на основе  state , action выдает новое состояние ъ
// что такое reduser
export const AlertState = ({children}) => {
// состоянию стаит и диспатч присваиваем висибл фалс
    const [state, dispath] = useReducer(alertReduser, {visible: false})
    const show = (text, type = 'warninng') => {
        dispath: ({
            type:SHOW_ALERT,
            payload : {text, type}
        })
    }

    const hide = () =>  dispath({type:HIDE_ALERT})
    return(
        <AlertContext.Provider value={{show,hide,alert:state}}>
            {children}
        </AlertContext.Provider>
    )
}