import { Button } from "./ui/button"

export default function Sidebar(){

	const availableSportsCars = 0
	const availableSUVCars = 0
	const availableMPVCars = 0
	const availableSedanCars = 0
	const availableCoupeCars = 0
	const availableHatchbackCars = 0
	const available2PersonCars = 0
	const available4PersonCars = 0
	const available6PersonCars = 0
	const available8OrMorePersonCars = 0
	const highestPrice = 350;
	return (
		<div className="w-1/5 bg-white">
			<form action="">
				<p>TYPE</p>
				<div className="flex">
					<input type="checkbox"/>
					<p>Sport</p>
					<p>{`(${availableSportsCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>SUV</p>
					<p>{`(${availableSUVCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>MPV</p>
					<p>{`(${availableMPVCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>Sedan</p>
					<p>{`(${availableSedanCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>Coupe</p>
					<p>{`(${availableCoupeCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>Hatchback</p>
					<p>{`(${availableHatchbackCars})`}</p>
				</div>
				<p>
					CAPACITY
				</p>
				<div className="flex">
					<input type="checkbox"/>
					<p>2 Persons</p>
					<p>{`(${available2PersonCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>4 Persons</p>
					<p>{`(${available4PersonCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>6 Persons</p>
					<p>{`(${available6PersonCars})`}</p>
				</div>
				<div className="flex">
					<input type="checkbox"/>
					<p>8 or More</p>
					<p>{`(${available8OrMorePersonCars})`}</p>
				</div>
				<p>PRICE</p>
				<input type="range" min='0' max={highestPrice}/>
				<p>input.value</p>
			</form>
		</div>
	)
}