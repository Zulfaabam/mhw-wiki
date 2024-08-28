import React, { createContext, useEffect, useState } from "react";
import { WeaponsDTO } from "../Dto/WeaponsDTO";
import { getAllWeapons } from "../services/WeaponService";

export interface WeaponsState {
  allWeapons: WeaponsDTO | null;
  isWeaponsLoading: boolean | null;
}

export interface WeaponsContextProvider {
  children: React.ReactNode;
}

const initialState = {
  allWeapons: null,
  isWeaponsLoading: null,
};

export const WeaponsContext = createContext<{
  state: WeaponsState;
  setState: React.Dispatch<React.SetStateAction<WeaponsState>>;
} | null>(null);

export const WeaponsProvider = ({ children }: WeaponsContextProvider) => {
  const [state, setState] = useState<WeaponsState>(initialState);

  useEffect(() => {
    getAllWeapons("long-sword").then((res) => {
      console.log(res.response);
    });
  }, []);

  return (
    <WeaponsContext.Provider value={{ state, setState }}>
      {children}
    </WeaponsContext.Provider>
  );
};
