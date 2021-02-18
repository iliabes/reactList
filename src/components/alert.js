import React, {useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert() => {
    cosnt {alert,hide} = useContext(AlertContext);


    if(!alert.type) {
        return null
    }
    return(
        <div className={`alert alert-${alert.type || 'warninng'} alert-dismissibl `}>
        <strong>Holy guacamole!</strong>{alert.text}
        <button type="button" className="close"  aria-label="Close">x</button>
        </div>
    )
};