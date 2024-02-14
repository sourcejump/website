import type { MiddlewareFactory } from '@/middlewares/types';
import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

export const withHeaders: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = await next(request, _next);

    const { href, pathname } = request.nextUrl;

    if (response) {
      // Add headers because `request.nextUrl` is not available in the server components
      response.headers.set('x-href', href);
      response.headers.set('x-pathname', pathname);
    }

    return response;
  };
};
