'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

interface UseQueryParamsOptions {
  replace?: boolean;
  delete?: boolean;
}

export const useQueryParams = <T = object>(): [
  URLSearchParams,
  (params: Partial<T>, options?: UseQueryParamsOptions) => void,
] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useMemo(
    () => new URLSearchParams(Array.from(searchParams.entries())),
    [searchParams],
  );

  const setQueryParams = useCallback(
    (params: Partial<T>, options?: UseQueryParamsOptions) => {
      Object.entries(params).forEach(([key, value]: [string, unknown]) => {
        if (value === null) {
          queryParams.delete(key);

          return;
        }

        const valuesForParam = queryParams.getAll(key);

        if (valuesForParam.includes(String(value))) {
          if (options?.delete) {
            queryParams.delete(key, value as string);
          }
        } else {
          options?.replace
            ? queryParams.set(key, value as string)
            : queryParams.append(key, value as string);
        }
      });

      const query = queryParams.toString();

      router.push(`${pathname}?${query}`, {
        scroll: false,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, queryParams],
  );

  return [queryParams, setQueryParams];
};
