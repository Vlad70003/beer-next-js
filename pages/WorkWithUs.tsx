import style from "../styles/WorkWithUs.module.scss";

import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { BorderWrapper } from "../components/wrappers/borderWrapper/BorderWrapper";
import { Vacancy } from "../components/Vacancy/Vacancy";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { styleRouterState } from "../types/router";
import { InputSelect } from "../ui/Select/InputSelect";
import { baseBackground } from "../assests/variable/variable";
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";

const WorkWithUs: React.FC = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header footer >
      <BaseWrapperMargin flex="auto">
        <AdditionalPageWrapper title="Работа у нас" mainPadding="26px 0 0 0">
          <div className={style.workWithUs}>
            <div className={style.workWithUs__subtitle}>
              Выберите область и город, где хотите работать
            </div>
            <div className={style.workWithUs__selectsWrapper}>
              <div className={style.workWithUs__selectWrapper}>
                <BorderWrapper
                  border="1px solid #BFBFBF"
                  borderRadius="20px"
                  maxWidth="230px"
                  minWidth="230px"
                >
                  <InputSelect placeholder="Выберите область" />
                </BorderWrapper>
              </div>
              <div className={style.workWithUs__selectWrapper}>
                <BorderWrapper
                  border="1px solid #BFBFBF"
                  borderRadius="20px"
                  maxWidth="230px"
                  minWidth="230px"
                >
                  <InputSelect placeholder="Выберите город" />
                </BorderWrapper>
              </div>
            </div>
            <div className={style.workWithUs__vacancyWrapper}>
              <Vacancy
                city="г. Северодвинск, ул. Железнодорожная, 50/3"
                experience="от 3 лет"
                requirement="Знание кассовой дисциплины, высшее образование"
                salary="40 000 руб."
                timetable="График 2/2, с 10.00 до 22.00"
                title="Продавец-консультант"
              />
              <Vacancy
                city="г. Северодвинск, ул. Железнодорожная, 50/3"
                experience="от 3 лет"
                requirement="Знание кассовой дисциплины, высшее образование"
                salary="40 000 руб."
                timetable="График 2/2, с 10.00 до 22.00"
                title="Продавец-консультант"
              />
              <Vacancy
                city="г. Северодвинск, ул. Железнодорожная, 50/3"
                experience="от 3 лет"
                requirement="Знание кассовой дисциплины, высшее образование"
                salary="40 000 руб."
                timetable="График 2/2, с 10.00 до 22.00"
                title="Продавец-консультант"
              />
            </div>
          </div>
        </AdditionalPageWrapper>
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};

export default WorkWithUs;
