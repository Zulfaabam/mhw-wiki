import React, { createContext, useState } from "react";
import { WeaponsDTO } from "../Dto/WeaponsDTO";
import { getAllWeapons } from "../services/WeaponService";

export interface WeaponsState {
  allWeapons: WeaponsDTO[] | null;
  isWeaponsLoading: boolean;
  error: string | null;
  weaponType: string;
  weaponDetails: WeaponsDTO | null;
  isDetailsLoading: boolean;
}

export interface ContextProvider {
  children: React.ReactNode;
}

const initialState = {
  allWeapons: null,
  isWeaponsLoading: false,
  error: null,
  weaponType: "long-sword",
  weaponDetails: null,
  isDetailsLoading: false,
};

export const WeaponsContext = createContext<{
  state: WeaponsState;
  setState: React.Dispatch<React.SetStateAction<WeaponsState>>;
  fetchWeapons: (weaponType: string) => void;
} | null>(null);

export const WeaponsProvider = ({ children }: ContextProvider) => {
  const [state, setState] = useState<WeaponsState>(initialState);

  function fetchWeapons(weaponType: string) {
    setState((prev) => ({
      ...prev,
      isWeaponsLoading: true,
    }));

    getAllWeapons(weaponType)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          isWeaponsLoading: false,
          allWeapons: res.response,
        }));
      })
      .catch((err) =>
        setState((prev) => ({
          ...prev,
          isWeaponsLoading: false,
          allWeapons: [],
          error: err,
        }))
      );
  }

  return (
    <WeaponsContext.Provider value={{ state, setState, fetchWeapons }}>
      {children}
    </WeaponsContext.Provider>
  );
};
