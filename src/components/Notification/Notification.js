import React from "react";
import PropTypes from 'prop-types';
import css from './Notification.module.css'


const Notification = ({message}) => (
    <span className={css.text}>{message}</span>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}



export default Notification;