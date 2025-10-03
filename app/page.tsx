import Card from './components/Card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <Card header={"Profile"} details={"Please click on this card to go Profile screen."} />
      <Card header={"Coaching"} details={"Please click on this card to go Coaching screen."} />
      <Card header={"FAQ"} details={"Please click on this card to go FAQ screen."} />
    </main>
  );
}
