import React, { lazy, Suspense } from "react";

const LazyPeriodicTable = lazy(() => import("./PeriodicTable"));

const PeriodicTable = (props) => (
  <Suspense fallback={null}>
    <LazyPeriodicTable {...props} />
  </Suspense>
);

export default PeriodicTable;
