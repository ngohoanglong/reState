import React, { lazy, Suspense } from "react";

const LazyPortfolio = lazy(() => import("./Portfolio"));

const Portfolio = (props) => (
  <Suspense fallback={null}>
    <LazyPortfolio {...props} />
  </Suspense>
);

export default Portfolio;
