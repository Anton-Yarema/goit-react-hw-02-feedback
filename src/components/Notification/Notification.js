import React from "react";
import css from './Notification.module.css'


const Notification = ({message}) => (
    <span className={css.text}>{message}</span>
)





export default Notification;