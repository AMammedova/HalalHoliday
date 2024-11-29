import React from 'react';

interface TypographyProps {
  /** The content to be displayed, can be a React node or a string */
  children?: React.ReactNode | string;
  /** Optional additional CSS classes to apply */
  className?: string;
  /** The font weight of the text, can be 'regular', 'medium', or 'bold'. Default is 'regular' */
  weight?: 'regular' | 'medium' | 'bold';
  /** The font size variant, such as 'Display1', 'Display2', 'Display3', etc. */
  variant: 'Display1' | 'Display2' | 'Display3' | 'BodyLG' | 'BodyMD' | 'BodySM' | 'TextLG';
  /** The font family to be used, can be 'roboto-slab' or 'raleway'. Default is 'roboto-slab' */
  fontFamily?: 'roboto-slab' | 'raleway';
  /** The HTML tag to be used, defaults to 'p' */
  component?: keyof JSX.IntrinsicElements;
}

/**
 * A customizable typography component.
 *
 * This component allows you to render text with different font sizes, line heights, font weights,
 * and font families based on the provided props. You can also specify the HTML tag to be used.
 *
 * @param {TypographyProps} props - The properties to customize the typography.
 * @returns {JSX.Element} The rendered text element.
 */

const Typography = ({
  children,
  className,
  weight = 'regular',
  variant = 'BodySM',
  fontFamily = 'roboto-slab',
  component: Component = 'p',
}: TypographyProps): JSX.Element => {
  // Define weight-specific styles
  const weightClasses = {
    regular: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  // Define variant-specific styles
  const variantClasses = {
    Display1: 'text-[24px] leading-[32px]',
    Display2: 'text-[34px] leading-[40px]',
    Display3: 'text-[48px] leading-[56px]',
    BodyLG: 'text-[20px] leading-[30px]',
    BodyMD: 'text-[18px] leading-[28px]',
    BodySM: 'text-[16px] leading-[24px]',
    TextLG: 'text-[14px] leading-[20px]',
  };

  // Define font family-specific styles
  const fontFamilyClasses = {
    'roboto-slab': 'font-roboto-slab',
    raleway: 'font-raleway',
  };

  return (
    <Component
      className={`${fontFamilyClasses[fontFamily]} ${weightClasses[weight]} ${variantClasses[variant]} ${className} `}
    >
      {children}
    </Component>
  );
};

export default Typography;

// Default to <p>

// <Typography variant="Display1" component="h1">
//   This is an H1 heading.
// </Typography>
