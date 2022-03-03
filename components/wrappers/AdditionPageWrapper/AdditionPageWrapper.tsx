import style from "./AdditionPageWrapper.module.scss";
import Link from "next/link";

import { additionalPageState } from "../../../types/additionalPage";
import { Bonus } from "../../../components/Bonus/Bonus";
import { CartCounter } from "../../../components/CartCounter/CartCounter";

export const AdditionalPageWrapper = ({
  children,
  title,
  bonus,
  price,
  mainPadding,
}: additionalPageState) => {

  const mainStyle = {
    padding: mainPadding || "0px",
  }

  return (
    <section className={style.additionalPage} style={mainStyle}>
      <header className={style.additionalPage__contscts__header}>
        <h2 className={style.additionalPage__contscts__header__title}>{title}</h2>
        <div className={style.additionalPage__contscts__header__wrapper}>
          {bonus && <Bonus />}
          {price && (
            <>
              <Link href="/Ordering">
                <a>
                  <CartCounter />
                </a>
              </Link>
            </>
          )}
        </div>
      </header>
      {children}
    </section>
  );
};
