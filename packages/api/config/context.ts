import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { prisma } from '@acme/db';

// eslint-disable-next-line functional/prefer-immutable-types
function createContext(opts?: trpcNext.CreateNextContextOptions) {
  return {
    req: opts?.req,
    res: opts?.res,
    prisma,
  };
}

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export type { Context };
export { createContext };
