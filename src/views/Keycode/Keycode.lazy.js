import React, { lazy, Suspense } from "react";

const LazyKeycode = lazy(() => import("./Keycode"));

const Keycode = (props) => (
  <Suspense fallback={null}>
    <LazyKeycode {...props} />
  </Suspense>
);

export default Keycode;
