import React, { lazy, Suspense } from 'react';

const LazyGithub = lazy(() => import('./Github'));

const Github = props => (
  <Suspense fallback={null}>
    <LazyGithub {...props} />
  </Suspense>
);

export default Github;
