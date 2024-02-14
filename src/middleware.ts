import { stackMiddlewares } from '@/middlewares/stackMiddlewares';
import { withHeaders } from '@/middlewares/withHeaders';
import { withRedirect } from '@/middlewares/withRedirect';

const middlewares = [withHeaders, withRedirect];

export default stackMiddlewares(middlewares);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
