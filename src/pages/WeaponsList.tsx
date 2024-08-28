import Select from "../components/Select";
import { weaponTypeOptions } from "../common/consts";
import { useContext, useEffect } from "react";
import { WeaponsContext } from "../context/WeaponsContext";
import Spinner from "../components/Spinner";
import WeaponCard from "../components/WeaponCard";

const WeaponsList = () => {
  const weaponsContext = useContext(WeaponsContext);

  const weapons = weaponsContext?.state?.allWeapons;

  const isLoading = weaponsContext?.state?.isWeaponsLoading;

  useEffect(() => {
    weaponsContext?.fetchWeapons(weaponsContext!.state.weaponType);
  }, [weaponsContext!.state.weaponType]);

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div className="flex justify-between w-full px-[88px]">
        <p className="text-3xl font-bold text-white">Weapons List</p>
        <div className="flex gap-4 justify-center items-center">
          <Select
            options={weaponTypeOptions}
            value={weaponsContext!.state.weaponType}
            onChange={(e) =>
              weaponsContext?.setState((prev) => ({
                ...prev,
                weaponType: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="remove-scrollbar flex gap-2 flex-wrap justify-center max-h-[745px] overflow-y-scroll">
        {isLoading ? (
          <Spinner />
        ) : (
          weapons?.map((weapon) => (
            <WeaponCard key={weapon?.id} weapon={weapon} />
          ))
        )}
      </div>
    </div>
  );
};

export default WeaponsList;
