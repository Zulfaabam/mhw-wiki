import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import { getSpecificWeapon } from "../services/WeaponService";
import { WeaponsDTO } from "../Dto/WeaponsDTO";
import DetailsSkeleton from "../components/Skeleton/DetailsSkeleton";
import CardSkeleton from "../components/Skeleton/CardSkeleton";

const WeaponDetails = () => {
  const { weaponId } = useParams();

  const [weapon, setWeapon] = useState<WeaponsDTO | null>(null);

  useEffect(() => {
    getSpecificWeapon(weaponId)
      .then((res) => {
        setWeapon(res.response);
      })
      .catch((err) => console.error(err));
  }, [weaponId]);

  if (!weapon) {
    return (
      <MainLayout>
        <div className="w-full flex justify-center">
          <CardSkeleton />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-400 border border-gray-100 rounded-lg shadow backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            className="rounded-t-lg w-60 h-60 md:w-80 md:h-80"
            src={weapon.assets?.image}
            alt={`${weapon.name} image`}
          />
          <div className="text-center">
            <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-200">
              {weapon.name}
            </h5>
            <h6 className="text-md font-bold tracking-tight text-slate-400 capitalize">
              {weapon.type?.replace("-", " ")}
            </h6>
          </div>
          <div className="flex w-full lg:w-auto flex-col md:flex-row justify-between md:justify-center gap-4 mb-2">
            <div className="w-full md:w-60 md:text-right text-center">
              <p className="text-orange-400">Rarity {weapon.rarity}</p>
              <p className="text-red-400">Attack {weapon.attack.display}</p>
              <p className="text-slate-200 capitalize">
                {weapon.elements[0]?.type} {weapon.elements[0]?.damage}{" "}
                {weapon.elements[0]?.hidden && "(Hidden)"}
              </p>
              <p className="text-purple-400">Elderseal {weapon.elderseal}</p>
              <p className="text-slate-300">Slots {weapon.slots?.length}: </p>
              {weapon.slots?.map((slot, idx) => (
                <p key={idx} className="text-slate-300">
                  level {slot.rank}
                </p>
              ))}
            </div>
            <div className="md:w-[2px] md:max-h-80 bg-gray-500 hidden md:block"></div>
            <div className="w-full md:w-60 md:text-left text-center">
              <p className="text-gray-300">
                Craftable: {weapon.crafting.craftable ? "Yes" : "No"}
              </p>
              <div className="text-gray-300">
                <p>Crafting Materials:</p>
                <ul className="pl-4 list-disc list-inside">
                  {weapon.crafting.craftingMaterials?.length > 0
                    ? weapon.crafting.craftingMaterials?.map((material) => (
                        <li className="text-gray-300" key={material.item.id}>
                          {material.item.name} {material.quantity}x
                        </li>
                      ))
                    : "-"}
                </ul>
              </div>
              <p className="text-gray-300">
                Previous:{" "}
                {weapon.crafting.previous ? (
                  <a
                    href={`/weapons/${weapon.crafting.previous}`}
                    target="_blank"
                    className="text-blue-300 underline"
                  >
                    {weapon.crafting.previous}
                  </a>
                ) : (
                  "-"
                )}
              </p>
              <div className="text-gray-300">
                <p>Upgrade Materials:</p>
                <ul className="pl-4 list-disc list-inside">
                  {weapon.crafting.upgradeMaterials?.length > 0
                    ? weapon.crafting.upgradeMaterials?.map((material) => (
                        <li className="text-gray-300" key={material.item.id}>
                          {material.item.name} {material.quantity}x
                        </li>
                      ))
                    : "-"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WeaponDetails;
