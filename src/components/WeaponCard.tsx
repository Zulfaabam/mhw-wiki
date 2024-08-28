import { WeaponsDTO } from "../Dto/WeaponsDTO";

export interface WeaponCardProps {
  weapon: WeaponsDTO;
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
  return (
    <div className="w-[260px] bg-gray-400 border border-gray-100 rounded-lg shadow backdrop-filter backdrop-blur-md bg-opacity-10">
      <a href={`/weapons/${weapon.id}`}>
        <img
          className="rounded-t-lg mx-auto w-48 h-48"
          src={weapon.assets?.image}
          alt={`${weapon.name} image`}
        />
      </a>
      <div className="p-5">
        <a href={`/weapons/${weapon.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-200">
            {weapon.name}
          </h5>
        </a>
        <div className="flex gap-2">
          <p className="text-orange-400">Rarity {weapon.rarity}</p>
          <p className="text-red-400">Attack {weapon.attack.display}</p>
          <p className="text-slate-200 capitalize">
            {weapon.elements[0]?.type}
          </p>
        </div>
        {/* <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default WeaponCard;
