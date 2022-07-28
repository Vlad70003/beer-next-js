import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { useActions } from "../../hooks/useActions";

import { mapState } from "../../types/map";

export const YandexMap = ({
  width,
  height,
  shopsList,
  coordForContacts,
  centerOffice,
  currentCities,
  currentRegion,
}: mapState) => {
  //actions
  const { currentShapAction } = useActions();
  const { closeModalAction } = useActions();

  const shops = shopsList?.data;

  const [currentCoords, setCurrentCoords] = useState(
    coordForContacts || [64.5635, 39.8302]
  );

  useEffect(() => {
    if (currentCities?.coord.length === 2) {
      setCurrentCoords(currentCities?.coord);
    } else if (currentRegion) {
      currentRegion.value === "Архангельская"
        ? setCurrentCoords([64.5401, 40.5433])
        : currentRegion.value === "Ярославская"
        ? setCurrentCoords([57.699, 39.759])
        : null;
    }
  }, [currentCities?.coord, currentRegion]);

  const shopsWidthCoord = shops?.filter(
    (item: any) => item?.coordinates?.length === 2
  );

  return (
    <YMaps className="12">
      <Map
        defaultState={{
          center: [64.5635, 39.8302],
          zoom: 12,
        }}
        state={{ center: currentCoords, zoom: 12 }}
        width={width}
        height={height}
      >
        {centerOffice ? (
          <Placemark geometry={centerOffice} />
        ) : (
          shopsWidthCoord?.map(
            (
              coordinate: any | undefined,
              ind: React.Key | null | undefined
            ) => (
              <Placemark
                geometry={coordinate?.coordinates}
                key={ind}
              />
            )
          )
        )}
      </Map>
    </YMaps>
  );
};
