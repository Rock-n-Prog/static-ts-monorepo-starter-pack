import { z } from 'zod';
import { ErrorMessages } from '../../types/ErrorMessage';

const addUserInputSchema = z.object({
  name: z.string().min(1, ErrorMessages.NoEmpty),
  email: z.string().min(1, ErrorMessages.NoEmpty).email(ErrorMessages.EmailFormat),
});

type AddUserInput = z.infer<typeof addUserInputSchema>;

export type { AddUserInput };
export { addUserInputSchema };
