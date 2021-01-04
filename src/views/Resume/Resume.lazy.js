import React, { lazy, Suspense } from "react";

const LazyResume = lazy(() => import("./Resume"));

const Resume = (props) => (
  <Suspense fallback={null}>
    <LazyResume {...props} />
  </Suspense>
);

export default Resume;
