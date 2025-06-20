import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
  ],
  colors: {
    gray: colors.gray,
    white: colors.white,
    black: colors.black,
    green: colors.green,
    zinc: colors.zinc,
    neutral: colors.neutral,
    transparent: colors.transparent,
  },
  theme: {
    fontFamily: {
      sans: ['Roboto Flex Variable', ...defaultTheme.fontFamily.sans],
      serif: ['Overpass Variable', ...defaultTheme.fontFamily.serif],
      heading: ['Overpass Variable', ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.625rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
    },
  },
};
