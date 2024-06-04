import Container from '@/components/Container';

/**
 * Home page
 *
 * @return {JSX.Element} The rendered component
 */
export default function Home(): JSX.Element {
  return (
    <div className='bg-slate-50 grainy-light'>
      <section>
        <Container className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <p>
            Get started by editing&nbsp;
            <code className='font-mono font-bold'>src/app/page.tsx</code>
          </p>
        </Container>
      </section>
    </div>
  );
}
