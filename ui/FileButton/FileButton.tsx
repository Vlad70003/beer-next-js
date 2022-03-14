import React from "react";
import style from "./FileButton.module.scss";

export const FileButton = () => {
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
          <div className="input__avatar">Редактировать</div>
        </label>
      </div>
    </div>
  );
};
