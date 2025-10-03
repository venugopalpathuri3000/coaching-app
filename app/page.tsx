import Card from './components/Card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100">
      
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">
        Welcome to Dashboard ✨
      </h1>

      <Card header="Profile" details="Please click on this card to go Profile screen." link="/profile" />
      <Card header="Coaching" details="Please click on this card to go Coaching screen." link="/coaching" />
      <Card header="FAQ" details="Please click on this card to go FAQ screen." link="/faq" />
    </main>
  );
}
