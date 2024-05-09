import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/organization(.*)',
  '/select-org(.*)',
]);

export default clerkMiddleware(
  (auth, req) => {
    const isLandingPage = req.nextUrl.pathname === '/';

    if (auth().userId && isLandingPage) {
      let path = '/select-org';

      if (auth().orgId) path = `/organization/${auth().orgId}`;
      const orgSelection = new URL(path, req.url);

      return NextResponse.redirect(orgSelection);
    }

    if (!auth().userId && isProtectedRoute(req)) {
      auth().protect();
    }

    if (
      auth().userId &&
      !auth().orgId &&
      req.nextUrl.pathname !== '/select-org'
    ) {
      const orgSelection = new URL('/select-org', req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
  { debug: true }
);

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
