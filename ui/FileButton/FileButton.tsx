import React from "react";
import style from "./FileButton.module.scss";

interface propsType {
  title: string,
  postTitle?: string
}

export const FileButton = ({title, postTitle}:propsType) => {
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
          <div className={style.title}>{title}</div>
          <div className={style.postTitile}>{postTitle}</div>
        </label>
      </div>
    </div>
  );
};
