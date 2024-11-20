import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContext {
	filterSport: boolean;
	filterSUV: boolean;
	filterMPV: boolean;
	filterSedan: boolean;
	filterCoupe: boolean;
	filterHatchback: boolean;
	filter2Persons: boolean;
	filter4Persons: boolean;
	filter6Persons: boolean;
	filter8OrMorePersons: boolean;
	setFilterSport: (term: boolean) => void;
	setFilterSUV: (term: boolean) => void;
	setFilterMPV: (term: boolean) => void;
	setFilterSedan: (term: boolean) => void;
	setFilterCoupe: (term: boolean) => void;
	setFilterHatchback: (term: boolean) => void;
	setFilter2Persons: (term: boolean) => void;
	setFilter4Persons: (term: boolean) => void;
	setFilter6Persons: (term: boolean) => void;
	setFilter8OrMorePersons: (term: boolean) => void;
}

const FilterContext = createContext<SearchContext | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterSport, setFilterSport] = useState(false);
  const [filterSUV, setFilterSUV] = useState(false);
  const [filterMPV, setFilterMPV] = useState(false);
  const [filterSedan, setFilterSedan] = useState(false);
  const [filterCoupe, setFilterCoupe] = useState(false);
  const [filterHatchback, setFilterHatchback] = useState(false);
  const [filter2Persons, setFilter2Persons] = useState(false);
  const [filter4Persons, setFilter4Persons] = useState(false);
  const [filter6Persons, setFilter6Persons] = useState(false);
  const [filter8OrMorePersons, setFilter8OrMorePersons] = useState(false);


  return (
    <FilterContext.Provider value={{filterSport, filterSUV, filterMPV, filterSedan, filterCoupe,
		filterHatchback, filter2Persons, filter4Persons, filter6Persons, filter8OrMorePersons,
		setFilter2Persons, setFilter4Persons, setFilter6Persons, setFilter8OrMorePersons,
		setFilterCoupe, setFilterHatchback, setFilterMPV, setFilterSedan, setFilterSport, setFilterSUV
	}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("failed");
  }
  return context;
};