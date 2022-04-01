import React from 'react';
import style from "./ModalStaticWrapper.module.scss";

import {Close} from "../../ui/Close/Close";

import {useActions} from "../../hooks/useActions";
import {useScroll} from "../../hooks/useScroll";

interface ModalStaticWrapperProps {
    children: React.ReactNode,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    transform?: string,
}

export const ModalStaticWrapper = ({children, top, bottom, left, right, transform}:ModalStaticWrapperProps) => {

    const {closeModalAction} = useActions();
    const scroll = useScroll();

    const styleModalStaticWrapper = {
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        transform: transform,
        zIndex: scroll > 50 ? 999 : 9999,
    }

  return (
    <div className={style.modalStaticWrapper} style={styleModalStaticWrapper}>
        { children }
        < Close onClick={closeModalAction} top="30px" right='30px' />
    </div>
  )
}
