import style from "./SamplePrevArrow.module.scss";

export const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return <div className={style.arrowPrev} onClick={onClick} />;
};
