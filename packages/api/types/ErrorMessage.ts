const ErrorMessages = {
  NoEmpty: 'noEmpty',
  EmailFormat: 'emailFormat',
} as const;

type ErrorMessage = (typeof ErrorMessages)[keyof typeof ErrorMessages];

export type { ErrorMessage };
export { ErrorMessages };
