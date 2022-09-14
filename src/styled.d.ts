import 'styled-components';

// TODO: Declare types for theme
declare module 'styled-components' {
  interface IColors {
    brand: {
      primary: string;
      secondary: string;
      muted: string;
    };
    ui: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      disabled: string;
      error: string;
      success: string;
    };
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
      error: string;
      success: string;
    };
  }

  enum Spaces {
    '0px',
    '4px',
    '8px',
    '16px',
    '32px',
    '64px',
  }

  type TSpace = Spaces[];

  interface ILineHeights {
    title: string;
    copy: string;
  }

  enum Sizes {
    '8px',
    '16px',
    '32px',
    '64px',
    '128px',
  }

  type TSizes = Sizes[];

  interface IFonts {
    body: string;
    heading: string;
    monospace: string;
  }

  interface IFontWeights {
    regular: number;
    medium: number;
    bold: number;
  }

  interface IFontSizes {
    caption: string;
    button: string;
    body: string;
    title: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
  }

  export interface DefaultTheme {
    colors: IColors;
    space: TSpace;
    lineHeights: ILineHeights;
    sizes: TSizes;
    fonts: IFonts;
    fontSizes: IFontSizes;
    fontWeights: IFontWeights;
  }
}
