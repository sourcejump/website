'use client';

import { useState } from 'react';
import { useUpdated } from '@/hooks/useUpdated';

export const useDebounce = <T>(value: T, delay = 750): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useUpdated(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
