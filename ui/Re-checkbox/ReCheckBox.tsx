import React, { useState } from "react";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import style from "./ReCheckBox.module.scss";

interface ReCheckBoxState {
  padding?: string;
}

export const ReCheckBox = ({ padding }: ReCheckBoxState) => {

  const ReCheckBoxStyle = {
    padding: padding || "0px",
  }

  return (
    <div className="re-checkbox-wrapper" style={ReCheckBoxStyle}>
      <Checkbox defaultChecked />
    </div>
  );
};
