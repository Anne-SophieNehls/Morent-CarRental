import { useFilter } from "@/context/filterContext";
import { useState } from "react";

export default function Sidebar() {
  const {
    setFilter2Persons,
    setFilter4Persons,
    setFilter6Persons,
    setFilter8OrMorePersons,
    setFilterCoupe,
    setFilterSUV,
    setFilterSedan,
    setFilterSport,
    setFilterHatchback,
    setFilterMPV,
  } = useFilter();

  const availableSportsCars = 0;
  const availableSUVCars = 0;
  const availableMPVCars = 0;
  const availableSedanCars = 0;
  const availableCoupeCars = 0;
  const availableHatchbackCars = 0;
  const available2PersonCars = 0;
  const available4PersonCars = 0;
  const available6PersonCars = 0;
  const available8OrMorePersonCars = 0;

  const highestPrice = 350;

  const [priceRange, setPriceRange] = useState<number>(0);

  const handleCheckboxChange = (setter: (value: boolean) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
	if (e.target.checked)
		setter(true);
	else
		setter(false);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  return (
    <div className="w-1/5 bg-white">
      <form action="">
        <p>TYPE</p>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilterSport)}
          />
          <p>Sport</p>
          <p>{`(${availableSportsCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilterSUV)}
          />
          <p>SUV</p>
          <p>{`(${availableSUVCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilterMPV)}
          />
          <p>MPV</p>
          <p>{`(${availableMPVCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilterSedan)}
          />
          <p>Sedan</p>
          <p>{`(${availableSedanCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilterCoupe)}
          />
          <p>Coupe</p>
          <p>{`(${availableCoupeCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilterHatchback)}
          />
          <p>Hatchback</p>
          <p>{`(${availableHatchbackCars})`}</p>
        </div>

        <p>CAPACITY</p>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilter2Persons)}
          />
          <p>2 Persons</p>
          <p>{`(${available2PersonCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilter4Persons)}
          />
          <p>4 Persons</p>
          <p>{`(${available4PersonCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilter6Persons)}
          />
          <p>6 Persons</p>
          <p>{`(${available6PersonCars})`}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            onChange={handleCheckboxChange(setFilter8OrMorePersons)}
          />
          <p>8 or More</p>
          <p>{`(${available8OrMorePersonCars})`}</p>
        </div>

        <p>PRICE</p>
        <input
          type="range"
          min="0"
          max={highestPrice}
          value={priceRange}
          onChange={handlePriceChange}
        />
        <p>{`$${priceRange}`}</p>
      </form>
    </div>
  );
}
