import React from 'react';
import BTN from '../assets/Component-1.png';

const Button = ({...props}) => {

    const btn_styles = {
        backgroundColor: 'inherit',
        border: 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 70
    }

    return (
        <button {...props} style={btn_styles} ><img src={BTN} alt='icon' /></button>
    )
}

export default Button;