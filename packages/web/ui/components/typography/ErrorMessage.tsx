import styled, { css } from 'styled-components';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

// :empty::before makes input error message take up space, even if not present
const ErrorMessage = styled.span(
  ({ theme }: Readonly<{ theme: Theme }>) => css`
    ${Typography};

    font-size: ${theme.fonts.sizes.xs};
    color: ${theme.colors.variants.error.main};

    :empty::before {
      content: '';
      display: inline-block;
    }
  `,
);

export { ErrorMessage };
