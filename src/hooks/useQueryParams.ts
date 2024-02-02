'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface UseQueryParamsOptions {
  replace?: boolean;
  delete?: boolean;
}

export const useQueryParams = <T = {}>(): [
  URLSearchParams,
  (params: Partial<T>, options?: UseQueryParamsOptions) => void,
] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useMemo(
    () => new URLSearchParams(Array.from(searchParams.entries())),
    [searchParams]
  );

  const setQueryParams = useCallback(
    (params: Partial<T>, options?: UseQueryParamsOptions) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(params).forEach(([key, value]: [string, any]) => {
        if (value === null) {
          queryParams.delete(key);

          return;
        }

        const valuesForParam = queryParams.getAll(key);

        if (valuesForParam.includes(String(value))) {
          if (options?.delete) {
            queryParams.delete(key, value);
          }
        } else {
          options?.replace ? queryParams.set(key, value) : queryParams.append(key, value);
        }
      });

      const query = queryParams.toString();

      router.push(`${pathname}?${query}`, {
        scroll: false,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, queryParams]
  );

  return [queryParams, setQueryParams];
};
