class LoggedFirstTime {

  checkedFirstTime() {
    return (localStorage.getItem("first-time") === null ||
      localStorage.getItem("first-time") === "true") ?  true : false;
  }

  changeLocalStorage(value:string) {
    localStorage.setItem("first-time", value);
  }

}

export const loggedFirstTime = new LoggedFirstTime();
