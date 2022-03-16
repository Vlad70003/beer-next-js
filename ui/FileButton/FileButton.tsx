import React from "react";
import style from "./FileButton.module.scss";

interface propsType {
  title: string,
}

export const FileButton = ({title}:propsType) => {
  return (
    <div className={style.fileButton}>
      <div className={style.wrapper}>
        <input
          multiple
          type="file"
          id="input__file"
          className={style.file}
        />
        <label htmlFor="input__file" className={style.label}>
          <div className="input__avatar">{title}</div>
        </label>
      </div>
    </div>
  );
};
