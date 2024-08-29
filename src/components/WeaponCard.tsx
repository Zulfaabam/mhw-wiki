import { WeaponsDTO } from "../Dto/WeaponsDTO";

export interface WeaponCardProps {
  weapon: WeaponsDTO;
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
  return (
    <div className="w-40 md:w-[260px] bg-gray-400 border border-gray-100 rounded-lg shadow backdrop-filter backdrop-blur-md bg-opacity-10">
      <a href={`/weapons/${weapon.id}`}>
        <img
          className="rounded-t-lg mx-auto w-24 h-24 md:w-48 md:h-48"
          src={weapon.assets?.image}
          alt={`${weapon.name} image`}
        />
      </a>
      <div className="p-5">
        <a href={`/weapons/${weapon.id}`}>
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-slate-200">
            {weapon.name}
          </h5>
        </a>
        <div className="flex gap-2 text-xs md:text-sm">
          <p className="text-orange-400">Rarity {weapon.rarity}</p>
          <p className="text-red-400">Attack {weapon.attack.display}</p>
          <p className="text-slate-200 capitalize">
            {weapon.elements[0]?.type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
