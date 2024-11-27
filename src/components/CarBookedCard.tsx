import svg from "../assets/svg/SVG (3).png"
import Map from "@/components/Map";

export default function CarBookedCard(){
	return (
		<div>
			<p className="text-xl font-semibold mb-5 mt-7">2024.09.23</p>
			<div className="bg-white">
				<div className="flex border-b border-black p-7">
					<img className="w-1/6 rounded-md" src="https://res.cloudinary.com/dg1qeccqc/image/upload/v1712572010/Cars/DALL_E_2024-04-08_12.26.43_-_Create_an_image_on_a_white_background_featuring_a_white_2020_Mercedes-Benz_Sprinter_van._Ensure_the_entire_image_including_edges_remains_bright_with_xxkfvp.webp" alt="" />
					<div className="ml-4">
						<p className="text-xl">Mercedes-Benz A-Class</p>
						<p className="text-[#90A3BF]">2024.09.23 - 2024.09.28</p>
						<p className="text-xl">$ 375</p>
					</div>
				</div>
				<div>
					<div className="flex">
						<div>
							<img src={svg} alt="" />
						</div>
						<div>
							<p className="text-xl text-[#6C757D]">Bremen</p>
							<p className="text-xl text-[#6C757D]">Bremen</p>
						</div>
						<div></div>
					</div>
					<Map></Map>
				</div>
			</div>
		</div>
	)
}