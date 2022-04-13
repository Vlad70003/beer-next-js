import styles from "./Button.module.scss";

interface classNaneBtnInterface {
  fontWeightClass: string | undefined;
  hoverClassColor: string | undefined;
  selectedBtn: boolean;
  selectClass?: string | undefined;
}

export const classNaneBtn = ({
  fontWeightClass,
  hoverClassColor,
  selectedBtn,
  selectClass,
}: classNaneBtnInterface) => {
  let className = `${styles.button}`;

  if (fontWeightClass) {
    className += ` ${styles[fontWeightClass]}`;
  }

  if (hoverClassColor) {
    className += ` ${styles[hoverClassColor]}`;
  }

  if (selectedBtn && selectClass) {
    className += ` ${styles[selectClass]}`;
  }

  return className;
};
