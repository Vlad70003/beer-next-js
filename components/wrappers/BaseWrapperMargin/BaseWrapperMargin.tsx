import React from "react";
import { baseWrapperState } from "../../../types/baseWrapper";

export const BaseWrapperMargin = ({
  children,
  maxWidth,
  display,
  justifyContent,
  alignItems,
  flex,
}: baseWrapperState) => {
  
  const styleBaseWrapper = {
    width: "inherit",
    maxWidth: maxWidth || "1280px",
    margin: "0 auto",
    display: display || "block",
    justifyContent: justifyContent || "none",
    alignItems: alignItems || "none",
    flex: flex || "none",
    padding: "0 15px",
  };

  return (
    <div className="base-wrapper" style={styleBaseWrapper}>
      {children}
    </div>
  );
};
