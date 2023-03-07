import { createPostsClient } from './posts/client';

function createClient() {
  return {
    posts: createPostsClient(),
  };
}

export { createClient };
