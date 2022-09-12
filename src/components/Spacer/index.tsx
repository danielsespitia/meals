// Packages
import React, { FC, ReactNode } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { ITheme } from '../../infrastructure/definitions/ITheme';

interface sizes {
  small: number;
  medium: number;
  large: number;
}

const sizeVariant: sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

interface positions {
  top: string;
  left: string;
  right: string;
  bottom: string;
}

const positionVariant: positions = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (
  position: keyof positions,
  size: keyof sizes,
  theme: ITheme
) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View<{ variant: string }>`
  ${({ variant }) => variant};
`;

interface ISpacer {
  position: keyof positions;
  size: keyof sizes;
  children: ReactNode;
}

export const Spacer: FC<ISpacer> = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
