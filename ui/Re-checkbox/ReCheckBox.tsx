import React, { useState } from "react";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";

interface ReCheckBoxState {
  padding?: string;
}

export const ReCheckBox = ({ padding }: ReCheckBoxState) => {

  const ReCheckBoxStyle = {
    padding: padding || "0px",
  }

  return (
    <div className="re-checkbox-wrapper" style={ReCheckBoxStyle}>
      <Checkbox defaultChecked className="re-checkbox" />
    </div>
  );
};
