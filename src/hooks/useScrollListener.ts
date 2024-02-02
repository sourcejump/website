'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, type RefObject } from 'react';
import { useMounted } from '@/hooks/useMounted';

interface ScrollListenerParams {
  scrollY: number;
  scrollX: number;
}

type Reference<T> = RefObject<T> | 'window';

const getReference = <T>(reference: Reference<T>) => {
  const isReactRef = reference !== 'window';
  const element = (reference as RefObject<T>)?.current;

  return { isReactRef, element };
};

export const useScrollListener = <T extends Element>(
  callback: (scrollPosition: ScrollListenerParams) => void,
  reference: Reference<T> = 'window'
) => {
  const handleScroll = useCallback(() => {
    const { isReactRef, element } = getReference(reference);

    const scrollX = (isReactRef ? element?.scrollWidth : window.scrollX) || 0;
    const scrollY = (isReactRef ? element?.scrollTop : window.scrollY) || 0;

    callback({ scrollX, scrollY });
  }, []);

  useMounted(() => {
    const { isReactRef, element } = getReference(reference);
    const target = isReactRef ? element : window;

    if (!target) {
      return;
    }

    target.addEventListener('scroll', handleScroll);

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  });
};
