import style from "./SamplePrevArrow.module.scss";

export const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={style.wrapper}>
      <div className={style.arrowPrev} onClick={onClick} />
    </div>
  );
};
