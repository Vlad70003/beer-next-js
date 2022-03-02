import style from "../styles/Contacts.module.scss";

import { Contact } from "../components/Contacts/Contact";
import { AdditionalPageWrapper } from "../components/wrappers/AdditionPageWrapper/AdditionPageWrapper";
import { BaseWrapperMargin } from "../components/wrappers/BaseWrapperMargin/BaseWrapperMargin";
import { HeaderWrapper } from "../components/wrappers/HeaderWrapper/HeaderWrapper";

import { styleRouterState } from "../types/router";
import { baseBackground } from "../assests/variable/variable";

const Contacts = () => {
  const styleHome: styleRouterState = {
    width: "100%",
    minHeight: "100vh",
    background: baseBackground,
  };

  return (
    <HeaderWrapper styles={styleHome} header footer>
      <BaseWrapperMargin flex="auto">
        <AdditionalPageWrapper title="Контакты">
          <main className={style.contscts__main}>
            <Contact
              address="г. Северодвинск, ул. Гагарина, д. 15 "
              phone="+7-900-000-00-00"
              working_hours="пн-пт с 10:00 до 19:00"
            />
            <div className="contscts__right-side"></div>
          </main>
        </AdditionalPageWrapper>
      </BaseWrapperMargin>
    </HeaderWrapper>
  );
};
export default Contacts;
