import { createContext, ReactNode, useContext, useState } from "react";

interface FavoritesContext {
  favorites: string;
  setFavorites: (term: string) => void;
}

const FavoritesContext = createContext<FavoritesContext | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string>("");

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("failed");
  }
  return context;
};
