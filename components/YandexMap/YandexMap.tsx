import React from "react";
import { YMaps, Map } from "react-yandex-maps";

import { mapState } from "../../types/map";

export const YandexMap = ({ width, height }: mapState) => {
  return (
    <YMaps className="12">
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 12 }}
        width={width}
        height={height}
      />
    </YMaps>
  );
};
