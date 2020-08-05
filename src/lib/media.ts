import { rem } from 'lib/polished';

export const breakpoints = {
	lg: 1140,
	md: 996,
    sm: 576
};

export const desktop = `@media (min-width: ${rem(breakpoints.lg)})`;
export const tablet = `@media (min-width: ${rem(breakpoints.md)})`;
export const landscape = `@media (min-width: ${rem(breakpoints.sm)})`;
export const mobile = `@media (max-width: ${rem(breakpoints.sm)})`;