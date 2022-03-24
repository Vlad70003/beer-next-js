import React, { useState } from 'react';
import Image from 'next/image';
import style from "./TimeChange.module.scss";

import TimeChangeMenu from "../TimeChangeMenu/TimeChangeMenu";

import clock from "../../assests/img/clock.svg";

interface TimeChangeState {
    margin?: string,
    setTimeOrder?: any,
    timeChangeIsOpen: boolean,
    handleOpen: (value: boolean) => void
}

export default function TimeChange({margin, setTimeOrder, timeChangeIsOpen, handleOpen}:TimeChangeState) {

    const TimeChangeStyle = {
        margin: margin || "0px",
    }

  return (
    <div className={style.timeChange} style={TimeChangeStyle} >
        <Image src={clock} width={20} height={20} alt="clock" className="timeChange__img" />
        {/* <div className="timeChange__menu" style={timeChangeIsOpen ? {display: "block"} : {display: "none"}}>
            <TimeChangeMenu setIsOpen={handleOpen} setTimeOrder={setTimeOrder} />
        </div> */}
    </div>
  )
}
