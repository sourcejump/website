'use client';

import { useCallback, useState } from 'react';

interface UseClipboard {
  isCopied: boolean;
  copyHandler: () => void;
}

export const useClipboard = (value: string, delay = 1500): UseClipboard => {
  const [isCopied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    if (isCopied) {
      return;
    }

    navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, delay);
  }, [isCopied, value, delay]);

  return {
    isCopied,
    copyHandler,
  };
};
