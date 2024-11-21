import CarAddOne from "@/components/CarAddOne";
import CarAddTwo from "@/components/CarAddTow";
import CarCard from "@/components/CarCard";
import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { useSearch } from "@/context/searchContext";
import { useFilter } from "@/context/filterContext";

export default function HomePage() {
  const [vehiclesData, setVehiclesData] = useState<VehicleData | null>(null);
  const [locationsData, setLocationsData] = useState<LocationsData | null>(
    null
  );
  const { searchFor } = useSearch();

  const {
    filter2Persons,
    filter4Persons,
    filter6Persons,
    filter8OrMorePersons,
    filterCoupe,
    filterSUV,
    filterSedan,
    filterSport,
    filterHatchback,
    filterMPV,
  } = useFilter();

  const getVehicles = async () => {
    const result = await supabase
      .from("vehicles")
      .select("*")
      .ilike("brand", `%${searchFor}%`);
    return result;
  };

  const getLocations = async () => {
    const result = await supabase.from("locations").select("*").single();
    return result;
  };

  type VehicleData = QueryData<ReturnType<typeof getVehicles>>;
  type LocationsData = QueryData<ReturnType<typeof getLocations>>;
  const locationsString = locationsData?.locations?.toString();
  const locationsArray = locationsString?.split(",");

  useEffect(() => {
    getVehicles().then((result) => setVehiclesData(result.data));
    getLocations().then((locations) => setLocationsData(locations.data));
  }, [searchFor]);

  const handleSubmit = () => {};

  return (
    <div className="bg-[#F6F7F9] flex justify-center">
      <Sidebar/>
      <div className="flex flex-col w-11/12">
        <div className="flex gap-5 mb-40 justify-around">
          <CarAddOne/>
          <CarAddTwo/>
        </div>
        <div className="flex justify-around mb-10 items-center">
          <div className="bg-white rounded-lg shadow-sm">
            <h3>Pickup</h3>
            <div className="flex">
              <div>
                <p>Location:</p>
                <select>
                  <option>Please Select</option>
                  {locationsArray?.map((el, index) => (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  ))}
                  ;
                </select>
              </div>
              <div>
                <p>Date</p>
                <input type="date" />
              </div>
              <div>
                <p>Time</p>
                <input type="time" />
              </div>
            </div>
          </div>
          <Button className="bg-[#3563E9]">↑↓</Button>
          <div className="rounded-lg bg-white shadow-sm">
            <h3>Drop-Off</h3>
            <div className="flex">
              <div>
                <p>Location:</p>
                <select>
                  <option>Please Select</option>
                  {locationsArray?.map((el) => (
                    <option value={el}>{el}</option>
                  ))}
                  ;
                </select>
              </div>
              <div className="">
                <p>Date</p>
                <input type="date" />
              </div>
              <div>
                <p>Time</p>
                <input type="time" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mr-24 mb-5">
          <Button onSubmit={handleSubmit} className="bg-[#3563E9]">
            Filter
          </Button>
        </div>
        <div>
          <div className="flex flex-wrap gap-5 justify-around">
            {vehiclesData?.map((el) => {
              return (
                <CarCard
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
