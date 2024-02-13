'use client';

import { useUpdated } from '@/hooks/useUpdated';
import { useEffect, useState } from 'react';

type SetValue<T> = (value: T | ((current: T) => T)) => void;

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    if (!item) {
      return;
    }

    setValue(JSON.parse(item));
  }, [key]);

  useUpdated(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
