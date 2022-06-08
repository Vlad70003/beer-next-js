import style from "../styles/WorkWithUs.module.scss";
import { NextPage } from "next";

//api
import { ShopsApi } from "../api/shopsApi";

//types
import { WorkWithUsProps } from "../types/pages";
import { styleRouterState } from "../types/router";

//components
import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { Vacancy } from "../components/Vacancy/Vacancy";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { InputSelect } from "../ui/Select/InputSelect";
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";

//assests
import { baseBackground } from "../assests/variable/variable";

const WorkWithUs: NextPage<WorkWithUsProps> = ({shops}) => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header footer>
      <BaseWrapperMargin flex="auto">
        <AdditionalPageWrapper title="Работа у нас" mainPadding="26px 0 0 0">
          <div className={style.workWithUs}>
            <div className={style.workWithUs__subtitle}>
              Выберите область и город, где хотите работать
            </div>
            <div className={style.workWithUs__selectsWrapper}>
              <div className={style.workWithUs__selectWrapper}>
                <InputSelect
                  placeholder="Выберите область"
                  width="100%"
                  minWidth="187px"
                  border="1px solid #BFBFBF"
                  transform
                />
              </div>
              <div className={style.workWithUs__selectWrapper}>
                <InputSelect
                  placeholder="Выберите город"
                  width="100%"
                  minWidth="187px"
                  border="1px solid #BFBFBF"
                  transform
                />
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

export async function getStaticProps() {
  const shopsApi = new ShopsApi();

  const res = await shopsApi.getShopsList();
  const shops = await res.json();

  return {
    props: { shops },
  };
}

export default WorkWithUs;