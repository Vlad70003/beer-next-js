class CurrentShop {

    checkedCurrentShop() {
      return (localStorage.getItem("currentShop") === null &&
        localStorage.setItem("currentShop", "Выберите магазин"))
    }
  
    changeLocalStorage(value:string) {
      localStorage.setItem("currentShop", value);
    }
  
    changeState(setState:any, value:boolean) {
      setState(value);
    }
  }
  
  export const currentShop = new CurrentShop();