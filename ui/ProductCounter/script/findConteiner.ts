interface findConteinerArg {
  generalOrder: { product: { status: string }; step: number }[];
  step: number;
}

export const findConteiner = ({ generalOrder, step }: findConteinerArg) => {
  let conteiner = null;
  generalOrder.forEach((element) => {
    if (element.product.status === "conteiner" && element.step === step) {
      conteiner = element;
    }
  });
  return conteiner;
};
