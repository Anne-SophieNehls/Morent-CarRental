import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import { useUserContext } from "@/context/userContext";

export default function FavoritesPage() {
  const { user } = useUserContext();
  const [favoritesData, setFavoritesData] = useState<FavoritesData>(null);

     const getFavorites = async () => {
    if (!user) return null;

    const result = await supabase
      .from("favorites")
      .select("*, vehicles(*)")
      .eq("user_id", user.id);
	  setFavoritesData(result.data);
      return result.data;
  };

  type FavoritesData = Awaited<ReturnType<typeof getFavorites>>;

    useEffect(() => {
    getFavorites();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  return (
			{ favoritesData ? (favoritesData.map((favorite) => (
				<CarCard
				vehicle={favorite.vehicles!}
				isFavorited={true}
				onFavoritteClick={getFavorites}
				/>
			))
			) : (<p>You have no fovorite cars</p>)
		}
	  </div>
    </div>
  );
}
