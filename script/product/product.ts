import { productState } from "../../types/product";

export class ProductClass {
  category = (categories: []) => {
    const returnCategory: any = {};

    categories.forEach(
      (category: { xml_id: string; name: string; filters?: {} }) => {
        returnCategory[category.xml_id] = {
          products: [],
          name: category.name,
          filters: category.filters || null,
        };
      }
    );

    return returnCategory;
  };

  grade = (arg: any) => {
    const { vid_piva, measure, filtratsiya, vkus } = arg;

    let grade = [];

    if (vid_piva.value) {
      grade.push(vid_piva.value);
    }

    if (filtratsiya.value) {
      grade.push(filtratsiya.value);
    }

    if (vkus.value) {
      grade.push(vkus.value);
    }

    if (!grade.length) {
      return null;
    }

    return grade
      .map((item, index) => (index ? item.toLowerCase() : item))
      .join(", ");
  };

  subtitle = (arg: any) => {
    const { alkogol, plotnost, alkogolLength, plotnostLength } = arg;

    if (!alkogol?.value && !plotnost?.value) {
      return null;
    }

    return `${
      alkogol?.value
        ? `${alkogol?.name?.substr(0, alkogolLength || 999)}: ${
            alkogol?.value
          }%`
        : ""
    } ${
      plotnost?.value
        ? `${plotnost?.name?.substr(0, plotnostLength || 999)}: ${
            plotnost?.value
          }%`
        : ""
    }`;
  };

  getPetBottle = ({ products }: any) => {
    let smallPet = null;
    let mediumPet = null;
    let bigPet = null;

    products?.forEach((element: { name: string }) => {
      if (element.name === "ПЭТ 0,5") {
        smallPet = element;
      }

      if (element.name === "ПЭТ 1,0") {
        mediumPet = element;
      }

      if (element.name === "ПЭТ 1,5") {
        bigPet = element;
      }
    });

    return { smallPet, mediumPet, bigPet };
  };

  status = (arg: any) => {
    const { measure, name } = arg;

    if (name === "ПЭТ 0,5" || name === "ПЭТ 1,0" || name === "ПЭТ 1,5") {
      return "conteiner";
    }

    switch (measure?.symbol) {
      case "л.":
        return "draft";

      case "кг":
        return "weight";

      // case OTHER_ID:
      //   return "conteiner";

      default:
        return null;
    }
  };

  unit = ({
    ves,
    obem,
  }: {
    ves: { value: number | null; name: string };
    obem: { value: number | null; name: string };
  }) => {
    if (obem?.value) {
      return `${obem.name} : ${obem?.value} мл.`;
    } else if (ves?.value) {
      return `${ves.name} : ${ves?.value} г.`;
    } else {
      return null;
    }
  };

  production = (arg: any) => {
    const { proizvodstvo } = arg;

    return `${
      proizvodstvo?.value ? `${proizvodstvo?.name} ${proizvodstvo?.value}` : ""
    }`;
  };

  price = (arg: any) => {
    const { price } = arg;
    return price ? price : null;
  };

  count = (arg: any) => {
    const { measure } = arg;

    return `Цена за ${measure?.ratio} ${measure?.symbol}`;
  };

  sorted = ({ products, categorySort }: any) => {
    const sortProduct = categorySort;

    products?.forEach((item: any) => {
      for (let key in sortProduct) {
        if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        } else if (item.category_xml_id === key) {
          sortProduct[key].products.push(item);
        }
      }
    });

    return sortProduct;
  };
}
