import Header from '@/components/header';

export default function Home() {
  return (
    <main
      className="bg-secondary h-full rounded-3xl bg-[url('/icons/background.svg')] bg-cover bg-center"
      style={{ backgroundSize: '180vh 70vw' }}
    >
      <Header />
    </main>
  );
}
