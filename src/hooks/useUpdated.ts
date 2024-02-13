'use client';

import {
  useEffect,
  useRef,
  type DependencyList,
  type EffectCallback,
} from 'react';

export const useUpdated = (
  callback: EffectCallback,
  dependencies: DependencyList
): void => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      return callback();
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
