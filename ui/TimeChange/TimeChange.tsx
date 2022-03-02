import React, { useState } from 'react';
import Image from 'next/image';
import style from "./TimeChange.module.scss";

import TimeChangeMenu from "../TimeChangeMenu/TimeChangeMenu";

import clock from "../../assests/img/clock.svg";

interface TimeChangeState {
    padding?: string,
    setTimeOrder?: any,
}

export default function TimeChange({padding, setTimeOrder}:TimeChangeState) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const TimeChangeStyle = {
        padding: padding || "0px",
    }

  return (
    <div className={style.timeChange} style={TimeChangeStyle} >
        <Image src={clock} alt="clock" className="timeChange__img" onClick={() => handleOpen()} />
        <div className="timeChange__menu" style={isOpen ? {display: "block"} : {display: "none"}}>
            <TimeChangeMenu setIsOpen={setIsOpen} setTimeOrder={setTimeOrder} />
        </div>
    </div>
  )
}
