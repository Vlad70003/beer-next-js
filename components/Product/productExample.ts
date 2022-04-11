import beerImg from "../../assests/img/product.png";
import cocaColaImg from "../../assests/img/Coca-cola.jpg";
import fish from "../../assests/img/fish.png";
import meat from "../../assests/img/meat.png";
import chease from "../../assests/img/chease.jpg";
import snack from "../../assests/img/snack.jpg";
import other from "../../assests/img/other.jpg";

export const BeerExample = [
  {
    productImg: beerImg,
    productTitle: "Пиво Jaws «Атомная Прачечная»",
    productGrade: "Светлое, 0.5 л",
    productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
    productProduction: "Производство: Бельгия",
    productPrice: 105,
    productCount: "цена за 1 шт",
    stock: "-10%",
    brewery: "Пивоварня: Бочкаревский пивоваренный завод",
    productTextButton: "В корзину",
    description:
      "Светлое пиво средней плотности, низового брожения, с ароматом светлого солода и минимальным хмелевым присутствием.",
    status: "draft",
    id: 1
  },
];

export const beveragesExaple = [
  {
    productImg: cocaColaImg,
    productTitle: "Кока-кола»",
    productGrade: "0.5 л",
    productSubtitle: "Алкоголь: 0%",
    productProduction: "Производство: Россия",
    productPrice: 50,
    productCount: "цена за 1 шт",
    productTextButton: "В корзину",
    id: 2,
  },
];

export const fishExaple = [
  {
    productImg: fish,
    productTitle: "Лещь",
    productGrade: "На развес",
    productSubtitle: "Вяленая",
    productProduction: "Производство: Россия",
    productPrice: 150,
    productCount: "цена за 100 гр",
    productTextButton: "В корзину",
    id: 3,
    status: "weight"
  },
];

export const meatExaple = [
  {
    productImg: meat,
    productTitle: "Вяленое мясо",
    productGrade: "На развес",
    productSubtitle: "Вяленое",
    productProduction: "Производство: Россия",
    productPrice: 450,
    productCount: "цена за 100 гр",
    productTextButton: "В корзину",
    id: 4,
    status: "weight",
  },
];

export const cheaseExaple = [
  {
    productImg: chease,
    productTitle: "Пармезан",
    productGrade: "На развес",
    productSubtitle: "Мягкий сыр",
    productProduction: "Производство: Италия",
    productPrice: 250,
    productCount: "цена за 100 гр",
    productTextButton: "В корзину",
    id: 5,
    status: "weight"
  },
];

export const snackExaple = [
  {
    productImg: snack,
    productTitle: "Чипсы Rice Up",
    productGrade: "1 шт",
    productSubtitle: "Чипсы",
    productProduction: "Производство: Россия",
    productPrice: 150,
    productCount: "цена за 60 гр",
    productTextButton: "В корзину",
    id: 6,
  },
];

export const otherExaple = [
  {
    productImg: other,
    productTitle: "Ягуар Оригинальный",
    productGrade: "1 шт",
    productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
    productProduction: "Производство: Россия",
    productPrice: 10,
    productCount: "цена за 0.5 мл",
    productTextButton: "В корзину",
    id: 7,
  },
];
