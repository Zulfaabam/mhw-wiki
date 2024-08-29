import Select from "../components/Select";
import { weaponTypeOptions } from "../common/consts";
import { useContext, useEffect } from "react";
import { WeaponsContext } from "../context/WeaponsContext";
import WeaponCard from "../components/WeaponCard";
import CardSkeleton from "../components/CardSkeleton";
import MainLayout from "../components/MainLayout";

const WeaponsList = () => {
  const weaponsContext = useContext(WeaponsContext);

  const weapons = weaponsContext?.state?.allWeapons;

  const isLoading = weaponsContext?.state?.isWeaponsLoading;

  const error = weaponsContext?.state.error;

  useEffect(() => {
    weaponsContext?.fetchWeapons(weaponsContext!.state.weaponType);
  }, [weaponsContext!.state.weaponType]);

  return (
    <MainLayout>
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 justify-between w-full md:px-[88px]">
          <p className="text-2xl md:text-3xl font-bold text-white text-center">
            Weapons List
          </p>
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
        <div className="remove-scrollbar flex gap-2 flex-wrap justify-center overflow-y-scroll weapon-list-container pb-6">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : error ? (
            <div className="w-full flex flex-col gap-2 justify-center items-center">
              <p className="text-3xl text-red-600">{error}</p>
            </div>
          ) : (
            weapons?.map((weapon) => (
              <WeaponCard key={weapon?.id} weapon={weapon} />
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default WeaponsList;
