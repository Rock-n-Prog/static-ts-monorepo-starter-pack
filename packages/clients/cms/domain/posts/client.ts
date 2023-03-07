import { z } from 'zod';
import { stubPosts } from './stubs';
import { postSchema } from './schemas';

function createPostsClient() {
  function getAll() {
    // Schema validation only here as an example
    const validatedPosts = z.array(postSchema).parse(stubPosts);
    return Promise.resolve(validatedPosts);
  }

  return {
    getAll,
  };
}

export { createPostsClient };
