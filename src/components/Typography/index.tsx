// Packages
import styled from 'styled-components/native';

// Definitions
import { ITheme } from '../../infrastructure/definitions/ITheme';

interface IVariants {
  body: (theme: ITheme) => string;
  label: (theme: ITheme) => string;
  caption: (theme: ITheme) => string;
  error: (theme: ITheme) => string;
  hint: (theme: ITheme) => string;
}

const defaultTextStyles = (theme: ITheme) => `
font-family: ${theme.fonts.body};
font-weight: ${theme.fontWeights.regular};
color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top: 0;
margin-bottom: 0;
`;

const body = (theme: ITheme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: ITheme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: ITheme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: ITheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ITheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants: IVariants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text<{ variant: keyof IVariants }>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

// TODO: Find proper type for defaultProps
// @ts-ignore: default component type defaultProps is not easily reachable
Text.defaultProps = {
  variant: 'body',
};
