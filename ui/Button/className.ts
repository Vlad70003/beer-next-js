import styles from "./Button.module.scss";

interface classNaneBtnInterface {
  fontWeightClass: string | undefined;
  hoverClassColor: string | undefined;
}

export const classNaneBtn = ({
  fontWeightClass,
  hoverClassColor,
}: classNaneBtnInterface) => {
  let className = `${styles.button}`;

  if (fontWeightClass) {
    className += ` ${styles[fontWeightClass]}`;
  }

  if (hoverClassColor) {
    className += ` ${styles[hoverClassColor]}`;
  }

  return className;
};
