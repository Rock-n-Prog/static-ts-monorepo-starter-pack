import { router } from '../config/trpc';
import { helloRouter } from './hello/router';
import { usersRouter } from './users/router';

const appRouter = router({
  hello: helloRouter,
  users: usersRouter,
});

type AppRouter = typeof appRouter;

export type { AppRouter };
export { appRouter };
