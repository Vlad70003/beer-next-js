import React, { useState } from 'react';
import Image from 'next/image';
import style from "./TimeChange.module.scss";

import TimeChangeMenu from "../TimeChangeMenu/TimeChangeMenu";

import clock from "../../assests/img/clock.svg";

interface TimeChangeState {
    margin?: string,
    setTimeOrder?: any,
}

export default function TimeChange({margin, setTimeOrder}:TimeChangeState) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const TimeChangeStyle = {
        margin: margin || "0px",
    }

  return (
    <div className={style.timeChange} style={TimeChangeStyle} >
        <Image src={clock} width={20} height={20} alt="clock" className="timeChange__img" onClick={() => handleOpen()} />
        <div className="timeChange__menu" style={isOpen ? {display: "block"} : {display: "none"}}>
            <TimeChangeMenu setIsOpen={setIsOpen} setTimeOrder={setTimeOrder} />
        </div>
    </div>
  )
}
