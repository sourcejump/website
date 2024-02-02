'use client';

import { useEffect, type EffectCallback } from 'react';

export const useMounted = (callback: EffectCallback): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
};
