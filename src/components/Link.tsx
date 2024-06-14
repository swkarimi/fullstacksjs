import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';

type Props = React.JSX.IntrinsicElements['a'] & {
  asChild?: boolean;
};

export const Anchor = ({ className, asChild, ...props }: Props) => {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp className={cn('text-accent-0 underline', className)} {...props} />
  );
};
