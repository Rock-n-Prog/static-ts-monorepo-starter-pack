import { z } from 'zod';
import type { Locale } from '../types/Locales';
import { stubPosts } from './stubs';
import { postSchema } from './schemas';

function createPostsClient() {
  function getAll(locale: Locale) {
    // Schema validation only here as an example
    const validatedPosts = z.array(postSchema).parse(stubPosts);
    const localizedPosts = validatedPosts.map(post => ({
      slug: post.slug,
      title: post.i18n[locale]?.title,
      content: post.i18n[locale]?.content,
    }));
    return Promise.resolve(localizedPosts);
  }

  return {
    getAll,
  };
}

export { createPostsClient };
