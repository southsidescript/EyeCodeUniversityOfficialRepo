import React from "react";
import style from '../../styles/global.module.scss';
import Image from 'next/image';



const PaymentButton = (props) => {
  
const {status,children} = props;
        
    return(
        
        <button className={status?style.payment_btn:style.payment_btn_disable}>{props.children}</button>

    )




}

export default PaymentButton;