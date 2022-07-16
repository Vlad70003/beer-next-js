import { productState } from "../../types/product";

export class ProductClass {
  category = (categories: []) => {
    const returnCategory: any = {};

    categories.forEach((category: { xml_id: string; name: string; filters?: {} }) => {
      returnCategory[category.xml_id] = { products: [], name: category.name, filters: category.filters || null };
    });

    return returnCategory;
  };

  grade = (arg: any) => {
    const { vid_piva, measure } = arg;

    return vid_piva.value
      ? `${vid_piva.value} ${
          measure?.ratio ? `${measure?.ratio} ${measure?.symbol}` : ""
        }`
      : `${measure?.ratio} ${measure?.symbol}`;
  };

  subtitle = (arg: any) => {
    const { alkogol, plotnost } = arg;

    return `${alkogol?.value ? `${alkogol?.name}: ${alkogol?.value}%` : ""} ${
      plotnost?.value ? `${plotnost?.name}: ${plotnost?.value}%` : ""
    }`;
  };

  status = (arg: any) => {
    const { measure } = arg;

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
