import Link from "next/link";
type Props = {
  header: string;
  details: string;
  link: string;
}

export default function Card({ header, details, link }: Props) {
  return (
    <Link href={link}>
      <div className="w-80 p-6 rounded-2xl shadow-lg cursor-pointer 
                      bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200
                      hover:from-pink-200 hover:via-purple-300 hover:to-indigo-200
                      transform hover:scale-105 transition duration-300 ease-in-out">
        
        <h2 className="text-2xl font-extrabold text-indigo-800 mb-2">
          {header}
        </h2>
        <p className="text-gray-700 font-medium">{details}</p>
      </div>
    </Link>
  );
}
