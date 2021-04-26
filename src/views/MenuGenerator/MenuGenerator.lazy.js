import React, { lazy, Suspense } from "react";

const LazyMenuGenerator = lazy(() => import("./MenuGenerator"));

const MenuGenerator = (props) => (
  <Suspense fallback={null}>
    <LazyMenuGenerator {...props} />
  </Suspense>
);

export default MenuGenerator;
