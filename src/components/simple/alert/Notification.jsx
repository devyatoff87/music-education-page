import React from 'react';
import "./Notification_styles.scss"

function Notification({ text = "", style = "success" }) {

    return <div className={`alert_msg ${style}`}>
        <div>
            <h1>{text}</h1>
        </div>
    </div>
}

export default Notification
