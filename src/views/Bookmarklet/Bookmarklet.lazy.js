import React, { lazy, Suspense } from "react";

const LazyKeycode = lazy(() => import("./Bookmarklet"));

const Keycode = (props) => (
  <Suspense fallback={null}>
    <LazyKeycode {...props} />
  </Suspense>
);

export default Keycode;
