import { CarCardProps } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useThemeContext } from "@/context/LightDarkModeContext";
//import { QueryData } from "@supabase/supabase-js";
//import { useState } from "react";
// import { Link, useParams } from "react-router-dom";

export default function PaymentPage(props: CarCardProps) {
  // const { id } = useParams();
  const { theme } = useThemeContext();
  //const [locationsData, setLocationsData] = useState<LocationsData | null>( null );
  // const [locationsFilter, setLocationsFilter] = useState("");

  //type LocationsData = QueryData<ReturnType<typeof  /* getLocations */>>;
  ///const locationsString = locationsData?.locations?.toString();
  // const locationsArray = locationsString?.split(",");
  // setLocationsData
  function handelSubmitRent() {}

  return (
    <section className="relative h-1/2">
      <div
        className={`top-0 p-5 my-3 mx-auto right-0 rounded-lg theme--${theme}-card`}
      >
        <div>
          <h2>Rental Summary</h2>
          <p>
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>
        <div className="flex justify-between">
          <h2
            className={`font-bold mb-2 mx-2 `}
          >{`${props.brand} ${props.model}`}</h2>
        </div>
        <p className="text-xs font-semibold text-[#90A3BF] mb-1 mx-2">
          {props.vehicleType}
        </p>
        <img className="rounded-xl mb-4" src={props.carImg} alt="Car Image" />
        <hr />
        <div className="flex justify-between items-center mb-6">
          <p className="font-bold">
            {`${props.pricePerDay}/`}
            <span className="text-xs text-[#90A3BF]">day</span>
          </p>
        </div>
      </div>
      <article className={`inset-y-0 left-0  rounded-lg theme--${theme}-card`}>
        <form className="p-5 my-3 mx-auto rounded-md">
          <div className="flex justify-between items-center m-6">
            <div>
              <h2>Billing Info</h2>
              <p>Please enter your billing info</p>
            </div>
            <p className="text-[#90A3BF]">Step 1 von 4</p>
          </div>
          <div>
            <div>
              <label htmlFor="Name">Name</label>
              <Input
                id="Name"
                type="text"
                placeholder="Your full Name"
                className="pr-60 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="Tel">Phone number</label>
              <Input
                id="Tel"
                type="text"
                placeholder="Your Phone number"
                className="pr-60 rounded-md"
              />
            </div>{" "}
            <div>
              <label htmlFor="Adress">Adress</label>
              <Input
                id="Adress"
                type="text"
                placeholder="Your Street here"
                className="pr-60 rounded-md"
              />
            </div>{" "}
            <div>
              <label htmlFor="Town">City / Town</label>
              <Input
                id="Town"
                type="text"
                placeholder="Your City / Town"
                className="pr-60 rounded-md"
              />
            </div>
          </div>
        </form>
        <form className="p-5 my-3 mx-auto rounded-md">
          <div className="flex justify-between items-center m-6">
            <div>
              <h2>Rental Info</h2>
              <p>Please select your rental date</p>
            </div>
            <p className="text-[#90A3BF]">Step 2 von 4</p>
          </div>
          <article>
            <form
              className={`bg-white rounded-lg p-4 shadow-sm ${`theme--${theme}-card`}`}
            >
              <h3>Pickup</h3>
              <div className="flex">
                <div>
                  <p>Location:</p>
                  {/*  <select onChange={handleLocation}>
                    <option>Please Select</option>
                    {locationsArray?.map((el, index) => (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    ))}
                    ;
                  </select> */}
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
            </form>
            <form
              className={`rounded-lg p-4  bg-white shadow-sm ${`theme--${theme}-card`}`}
            >
              <h3>Drop-Off</h3>
              <div className="flex">
                <div>
                  <p>Location:</p>
                  {/*  <select>
                    <option>Please Select</option>
                    {locationsArray?.map((el, index) => (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    ))}
                    ;
                  </select> */}
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
            </form>
          </article>
        </form>
        <form className="p-5 my-3 mx-auto rounded-md">
          <div className="flex justify-between items-center m-6">
            <div>
              <h2>Payment Metod</h2>
              <p>Please enter your payment method</p>
            </div>
            <p className="text-[#90A3BF]">Step 3 von 4</p>
          </div>
          <div>
            <form>
              <div className="flex justify-between items-center m-6">
                <div>
                  <h2>Confirmation</h2>
                  <p>
                    We are getting to the end. Just a few clicks and your rental
                    is ready!
                  </p>
                </div>
                <p className="text-[#90A3BF]">Step 4 von 4</p>
              </div>
            </form>
          </div>
          <div>
            <Button onSubmit={handelSubmitRent}>Rent Now</Button>
          </div>
        </form>
        <div></div>
      </article>
    </section>
  );
}
