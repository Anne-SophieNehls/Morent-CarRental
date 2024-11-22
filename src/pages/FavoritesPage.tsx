import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";

type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
};

type Favorite = {
  id: number;
  user_id: string;
  vehicle_id: string;
  created_at: string;
  vehicle?: Vehicle;
};

export default function FavoritesPage() {
  const { userid } = useParams();
  const [favoritesData, setFavoritesData] = useState<Favorite[] | null>(null);

  const getFavorites = async () => {
    if (!userid || userid === ":id") {
      return null;
    }

    const { data, error } = await supabase
      .from("favorites")
      .select("*, vehicle_id(*)")
      .eq("user_id", userid);

    if (error) {
      console.error("Error fetching favorites:", error);
      return null;
    }

    return data;
  };

  useEffect(() => {
    getFavorites().then((favorites) => {
      setFavoritesData(favorites);
    });
  }, [userid]);


  console.log(favoritesData)
  return (
    <div>
      <h1>Your Favorites</h1>
      {favoritesData && favoritesData.length > 0 ? (
        <ul>
          {/* {favoritesData.map((el) => (
                <CarCard
				id={el.id}
				key={el.id}
				brand={el.brand}
				carImg={el.carImg}
				model={el.model}
				gearType={el.gearType}
				vehicleType={el.vehicleType}
				year={el.year.toString()}
				seats={el.seats.toString()}
				pricePerDay={el.pricePerDay.toString()}
				consumption={el.consumption}
			  ></CarCard>
          ))} */}
        </ul>
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}
