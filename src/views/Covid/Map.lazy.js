import React, { lazy, Suspense } from "react";

const MapLazy = lazy(() => import("./Map"));

const Map = (props) => (
  <Suspense fallback={null}>
    <MapLazy {...props} />
  </Suspense>
);

export default Map;
