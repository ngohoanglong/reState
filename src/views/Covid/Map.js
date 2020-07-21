import React, { useEffect, useRef, useState } from "react";
import MapCorona from "./Map/MapCorona";
const Map = ({ data, selectDate }) => {
  const start = useRef(Date.now());
  const [e, setE] = useState(null);
  useEffect(() => {
    setE(
      <MapCorona
        data={data.groubByDate[selectDate]
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
          )}
      />
    );
  }, [data.groubByDate, selectDate]);
  return e;
};
export default Map;
