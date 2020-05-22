import React, { lazy, Suspense } from 'react';

const LazyCovid = lazy(() => import('./Covid'));

const Covid = props => (
  <Suspense fallback={null}>
    <LazyCovid {...props} />
  </Suspense>
);

export default Covid;
