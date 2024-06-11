'use client';

import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';
/**
 * Props type for auth context provider
 */
type AuthProps = {
  // child elements
  children: ReactNode;
};

/**
 * A component that wrap with auth
 *
 * @param {Readonly<AuthProps>} props - The properties for the auth provider
 * @return {JSX.Element} The rendered component
 */
const AuthProvider = (props: Readonly<AuthProps>): JSX.Element => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default AuthProvider;
