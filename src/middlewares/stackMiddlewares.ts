import type { MiddlewareFactory } from '@/middlewares/types';
import { NextResponse, type NextMiddleware } from 'next/server';

export function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0,
): NextMiddleware {
  const current = functions[index];

  if (current) {
    const next = stackMiddlewares(functions, index + 1);

    return current(next);
  }

  return () => NextResponse.next();
}
