import React, {useContext} from "react";

import { AlertContext } from "../context/alert/AlertContext";

export const Alert = () => {
    const {alert,hide} = useContext(AlertContext);
    console.log('alert',alert )

    if(!alert.visible) {
        return null
    }
    return(
        <div className={`alert alert-${alert.type || 'warninng'} alert-dismissibl `}>
        <strong>Holy guacamole!</strong>{alert.text}
        <button type="button" className="close"  aria-label="Close">x</button>
        </div>
    )
};