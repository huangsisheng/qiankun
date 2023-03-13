import React, { Suspense, lazy } from "react";

export const loadComponent = (page, exportVNode = false, isAsync = true) => {

  if (isAsync) {
    const AsyncComp = lazy(() => import(`../modules/${page}`))

    if (exportVNode) return AsyncComp;

    return <Suspense fallback={'loading'}>
      <AsyncComp />
    </Suspense>
  }

  return require(`../modules/${page}`).default()
}
