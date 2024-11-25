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
      return result.data;
  };

  type FavoritesData = Awaited<ReturnType<typeof getFavorites>>;

    useEffect(() => {
    getFavorites().then((result) => {
      if (result)
      setFavoritesData(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  console.log(favoritesData)
  return (
    <div>
      <h1>Your Favorites</h1>
	  <div className="grid grid-cols-4 gap-5">
			{ favoritesData ? (favoritesData.map((favorite) => (
				<CarCard
				id={favorite.vehicles!.id}
				key={favorite.vehicles!.id}
				brand={favorite.vehicles!.brand}
				carImg={favorite.vehicles!.carImg}
				model={favorite.vehicles!.model}
				gearType={favorite.vehicles!.gearType}
				vehicleType={favorite.vehicles!.vehicleType}
				year={favorite.vehicles!.year.toString()}
				seats={favorite.vehicles!.seats?.toString()}
				pricePerDay={favorite.vehicles!.pricePerDay?.toString()}
				consumption={favorite.vehicles!.consumption}
				/>
			))
			) : (<p>You have no fovorite cars</p>)
		}
	  </div>
    </div>
  );
}
