import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import { getSpecificWeapon } from "../services/WeaponService";
import { WeaponsDTO } from "../Dto/WeaponsDTO";
import Spinner from "../components/Spinner";

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
        <Spinner />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="w-full bg-gray-400 border border-gray-100 rounded-lg shadow backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="flex gap-8">
          <img
            className="rounded-t-lg w-60 h-60"
            src={weapon.assets?.image}
            alt={`${weapon.name} image`}
          />
          <div className="pt-6">
            <h5 className=" text-2xl font-bold tracking-tight text-slate-200">
              {weapon.name}
            </h5>
            <h6 className="mb-2 text-md font-bold tracking-tight text-slate-400 capitalize">
              {weapon.type?.replace("-", " ")}
            </h6>
            <div className="flex gap-2">
              <p className="text-orange-400">Rarity {weapon.rarity}</p>
              <p className="text-red-400">Attack {weapon.attack.display}</p>
              <p className="text-slate-200 capitalize">
                {weapon.elements[0]?.type} {weapon.elements[0]?.damage}{" "}
                {weapon.elements[0]?.hidden && "(Hidden)"}
              </p>
            </div>
            <div className="flex gap-2 mb-2">
              <p className="text-purple-400">Elderseal {weapon.elderseal}</p>
              <p className="text-slate-300">Slots {weapon.slots?.length}: </p>
              {weapon.slots?.map((slot, idx) => (
                <p key={idx} className="text-slate-300">
                  level {slot.rank}
                </p>
              ))}
            </div>
            <h6 className="text-lg font-bold tracking-tight text-gray-200 capitalize">
              Crafting
            </h6>
            <div className="mb-2">
              <p className="text-gray-300">
                Craftable: {weapon.crafting.craftable ? "Yes" : "No"}
              </p>
              <div className="text-gray-300 flex gap-2">
                <p>Crafting Materials: </p>
                <ul>
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
              <div className="text-gray-300 flex gap-2">
                <p>Upgrade Materials: </p>
                <ul>
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
