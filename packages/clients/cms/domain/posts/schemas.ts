import { z } from 'zod';
import {Locales} from "../types/Locales";

const postLocalizedSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const postSchema = z.object({
  slug: z.string(),
  i18n: z.record(z.nativeEnum(Locales), postLocalizedSchema),
});

export { postSchema };
