export class CatalogApi {
  getCatalogList = () => {
    return fetch(`https://bitrix.pivasikvas.ru/api/catalog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Authorization-Token": "8W8XuiZy:12b292ac-8c2049f6-dad4518e-c252bac8",
      },
    });
  };

  getCatalogListByShopId = (id:string) => {
    return fetch(`https://bitrix.pivasikvas.ru/api/catalog/shop/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Authorization-Token": "8W8XuiZy:12b292ac-8c2049f6-dad4518e-c252bac8",
      },
    });
  };
}
