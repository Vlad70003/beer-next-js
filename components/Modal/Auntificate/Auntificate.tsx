import React, { useState } from "react";
import style from "./Auntificate.module.scss";

import { LoggedIn } from "./LoggedIn/LoggedIn";
import { Registration } from "./Registration/Registration";

interface StateProps {
  closeModal?: any;
}

export const Auntificate = ({ }:StateProps) => {
  
  const [leggedIn, setLoggedIn] = useState(true);

  return (
    <div className={style.auntificate}>
      { leggedIn && <LoggedIn setLoggedIn={setLoggedIn} />}
      { !leggedIn && <Registration setLoggedIn={setLoggedIn} />}
    </div>
  );
};
