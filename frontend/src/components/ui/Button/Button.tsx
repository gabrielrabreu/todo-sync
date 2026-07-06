import { Button as ButtonPrimitive } from '@base-ui/react/button';

import { cn } from '@/utils/cn';

import { buttonVariants, type ButtonVariantProps } from './Button.variants';

export type ButtonProps = ButtonPrimitive.Props & ButtonVariantProps;

export const Button = ({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
