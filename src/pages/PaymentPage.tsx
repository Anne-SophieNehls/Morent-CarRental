import { CarCardProps } from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { useThemeContext } from "@/context/LightDarkModeContext";
import { Link, useParams } from "react-router-dom";

export default function PaymentPage(props: CarCardProps) {
  const { id } = useParams();
  const { theme } = useThemeContext();

  return (
    <section className="relative h-1/2">
      <div className={`top-0 right-0 rounded-lg theme--${theme}-card`}>
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
        <form>
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
        <form>
          <div className="flex justify-between items-center m-6">
            <div>
              <h2>Rental Info</h2>
              <p>Please select your rental date</p>
            </div>
            <p className="text-[#90A3BF]">Step 2 von 4</p>
          </div>
          <article>
            <h3></h3>
          </article>
        </form>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
    </section>
  );
}
