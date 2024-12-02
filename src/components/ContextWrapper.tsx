"use client";
import { useState, Context } from "react";
import { createContext } from "react";
import { TProperty } from "@/Types";
export type PropertiesContextType = {
  properties: TProperty[];
  setProperties: React.Dispatch<React.SetStateAction<TProperty[]>>;
};
export const propertiesContext: Context<PropertiesContextType> = createContext<PropertiesContextType>({
  properties: [],
  setProperties: () => {},
});
export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [properties, setProperties] = useState<TProperty[]>([] as TProperty[]);
  return (
    <propertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </propertiesContext.Provider>
  );
}