import {
  BEER_ID,
  BOTTLED_ID,
  BEVERAGES_ID,
  FISH_ID,
  MEAT_ID,
  CHEASE_ID,
  SNACK_ID,
  OTHER_ID,
} from "./../../data/productId";

import { productState } from "../../types/product";

export class ProductClass {
  grade = (arg: any) => {
    const { category_id, vid_piva, measure } = arg;

    switch (category_id) {
      case BEER_ID:
      case BOTTLED_ID:
        return `${vid_piva.value ? vid_piva?.value : ""} ${
          measure?.ratio ? `${measure?.ratio} ${measure?.symbol}` : ""
        }`;

      case FISH_ID:
      case MEAT_ID:
      case CHEASE_ID:
      case SNACK_ID:
      case OTHER_ID:
        return measure?.ratio ? `${measure?.ratio} ${measure?.symbol}` : "";

      default:
        return null;
    }
  };

  subtitle = (arg: any) => {
    const { category_id, alkogol, plotnost } = arg;

    switch (category_id) {
      case BEER_ID:
      case BOTTLED_ID:
        return `${
          alkogol?.value ? `${alkogol?.name}: ${alkogol?.value}%` : ""
        } ${plotnost?.value ? `${plotnost?.name}: ${plotnost?.value}%` : ""}`;

      default:
        return null;
    }
  };

  status = (arg: any) => {
    const { category_id } = arg;

    switch (category_id) {
      case BEER_ID:
        return "draft";

      case FISH_ID:
      case MEAT_ID:
      case CHEASE_ID:
        return "weight";

      case OTHER_ID:
        return "conteiner";

      default:
        return null;
    }
  };

  production = (arg: any) => {
    const { category_id, proizvodstvo } = arg;

    switch (category_id) {
      case BEER_ID:
      case BOTTLED_ID:
      case FISH_ID:
      case MEAT_ID:
      case CHEASE_ID:
      case SNACK_ID:
      case OTHER_ID:
        return proizvodstvo.value
          ? `${proizvodstvo?.name}: ${proizvodstvo?.value}`
          : "";

      default:
        return null;
    }
  };

  price = (arg: any) => {
    const { price } = arg;
    return price ? price : null;
  };

  count = (arg: any) => {
    const { category_id, measure } = arg;

    switch (category_id) {
      case FISH_ID:
      case MEAT_ID:
      case BOTTLED_ID:
      case BEER_ID:
      case CHEASE_ID:
      case SNACK_ID:
      case OTHER_ID:
        return `Цена за ${measure?.ratio} ${measure?.symbol}`;

      default:
        return null;
    }
  };

  sorted = ({products}:any) => {

    const sortProduct: productState = {
      beer: [],
      beverages: [],
      bottled: [],
      fish: [],
      meat: [],
      chease: [],
      snack: [],
      other: [],
      stock: [],
    };

    products?.forEach((item: any) => {
      if (item.category_id === BEER_ID) {
        sortProduct.beer.push(item);
      } else if (item.category_id === BEVERAGES_ID) {
        sortProduct.beverages.push(item);
      } else if (item.category_id === BOTTLED_ID) {
        sortProduct.bottled.push(item);
      } else if (item.category_id === FISH_ID) {
        sortProduct.fish.push(item);
      } else if (item.category_id === MEAT_ID) {
        sortProduct.meat.push(item);
      } else if (item.category_id === CHEASE_ID) {
        sortProduct.chease.push(item);
      } else if (item.category_id === SNACK_ID) {
        sortProduct.snack.push(item);
      } else if (item.category_id === OTHER_ID) {
        sortProduct.other.push(item);
      }
    });

    return sortProduct;
  }
}
