import { z } from 'zod';

const postSchema = z.object({
  slug: z.string(),
  title: z.string(),
  content: z.string(),
});

type Post = z.infer<typeof postSchema>;

export type { Post };
export { postSchema };
