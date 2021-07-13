import { css } from '@emotion/react';

export const color = {
  white: '#FFF',
  lightGrey: '#F2F2F7',
  mediumGrey: '#E5E5EA',
  regularGrey: '#8E8E93',
  deepGrey: '#2C2C2E',
  appleBlue: '#0084FF',
  appleRed: '#FF453A',
  appleLightYellow: '#FEE9AF',
  appleYellow: '#FFD60A',
  appleMint: '#66D4CF',
  black: '#000',
};

export const defaultFont = css`
  font-size: 13px;
  line-height: 20px;
`;

export const smallFont = css`
  font-size: 11px;
  line-height: 16px;
`;

export const bigFont = css`
  font-size: 24px;
  line-height: 32px;
`;

export const Center = css`
  text-align: center;
  margin: 0 auto !important;
`;

export const boxShadow = {
  RegularShadow:
    '0px 4px 10px rgba(0, 0, 0, 0.05), 0px 2px 5px rgba(0, 0, 0, 0.05)',
  BoldShadow:
    '1px 3px 20px rgba(0, 0, 0, 0.05), 0px 10px 30px rgba(0, 0, 0, 0.1)',
};

const breakPoints = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mq = Object.keys(breakPoints)
  .map((key) => [key, breakPoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {});
