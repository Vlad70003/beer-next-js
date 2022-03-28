import style from "./SampleNextArrow.module.scss";

export const SampleNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.arrowNext} onClick={onClick} />
    </div>
  );
};