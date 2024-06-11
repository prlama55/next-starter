import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/**
 * Props type for wrapper component
 */
type WrapperProps = {
  // class names
  className?: string;

  // child elements
  children: ReactNode;
};

/**
 * A component that wrap a sections
 *
 * @param {Readonly<WrapperProps>} props - The properties for the component
 * @return {JSX.Element} The rendered component
 */
const Container = (props: Readonly<WrapperProps>): JSX.Element => {
  const { className, children } = props;

  return <div className={cn('mx-auto h-full max-w-screen-xl px-2 md:px-20', className)}>{children}</div>;
};

export default Container;
