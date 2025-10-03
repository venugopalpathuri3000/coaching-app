type Props = {
  header: string;
  details: string;
}

export default function Card({header, details} : Props) {
  return (
    <main className="w-40 h-72 bg-gray-100 text-black flex flex-col items-center justify-between p-8 m-2">
      <span className="font-bold">{header}</span>
      <br/>
      {details}
    </main>
  );
}
