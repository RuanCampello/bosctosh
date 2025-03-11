import Header from '@/components/header';

export default function Home() {
  return (
    <main
      className="bg-secondary h-full bg-[url('/assets/background.svg')] bg-cover bg-center"
      style={{ backgroundSize: '200vh 70vw' }}
    >
      <Header />
    </main>
  );
}
