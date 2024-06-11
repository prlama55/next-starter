import Link from 'next/link';
import Container from './Container';
import { buttonVariants } from './ui/button';

/**
 * Application navbar component
 * @return {JSX.Element} The rendered component
 */
const Navbar = (): JSX.Element => {
  return (
    <nav className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <Container>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='z-40 flex font-semibold'>
            LOGO<span className='text-green-600'>TXT</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            <Link href='/api/auth/register' className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
              Sign up
            </Link>
            <Link href='/api/auth/login' className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
              Login
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
