type Props = {
  header: string;
  details: string;
  link: string;
}

export default function Card({header, details, link} : Props) {
  return (
    <main >
      <a 
        href={link}
        className="w-40 h-72 bg-gray-100 text-black flex flex-col items-center justify-between p-8 m-2"> 
          {header}
          <br/>
          {details}
      </a>
    </main>
  );
}
