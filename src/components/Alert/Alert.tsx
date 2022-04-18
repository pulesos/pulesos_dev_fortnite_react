import React, { useEffect } from "react";
import './Alert.css';

type AlertType = {
    name: string,
    closeAlert: () => void
}

const Alert: React.FC<AlertType> = ({name = '', closeAlert}) => {


    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        };
    }, [closeAlert, name]); // warn

    return (
        <div id='toast-container'>
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    )
}

export default Alert;