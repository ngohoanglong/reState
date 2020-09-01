import React, { useMemo } from "react";
import MapCorona from "./Map/MapCorona";
const Map = ({ data, selectDate, onClick, selectCountry }) => {
  const source = useMemo(() => {
    return data.groubByDate[selectDate]
      .sort((a, b) => Number(b[6]) - Number(a[6]))
      .map(
        ([
          date,
          country,
          legion,
          deaths,
          cumulativeDeaths,
          confirmed,
          cumulativeConfirmed,
        ]) => ({
          title: country,
          country,
          confirmedcases: cumulativeConfirmed,
          deaths: cumulativeDeaths,
        })
      );
  }, [data.groubByDate, selectDate]);

  return (
    <MapCorona selectCountry={selectCountry} data={source} onClick={onClick} />
  );
};
export default Map;
