import type { MiddlewareFactory } from '@/middlewares/types';
import type { NextFetchEvent, NextRequest } from 'next/server';

export const withRedirect: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { pathname } = request.nextUrl;

    // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // If you have one
    const publicFiles = [
      '/manifest.json',
      '/favicon.ico',
      '/robots.txt',
      '/sitemap.xml',
      '/sitemap.xsl',
      // Other files in `public`
    ];

    if (publicFiles.includes(pathname)) {
      return;
    }

    return next(request, _next);
  };
};
