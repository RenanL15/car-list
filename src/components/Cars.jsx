import { useEffect, useState } from "react";
import CarPixel from "../assets/images/car_pixel.gif";
import CarPixel2 from "../assets/images/car_pixel_2.gif";
import CarPixel3 from "../assets/images/car_pixel_3.gif";

export default function Cars() {
  const [car, setCar] = useState(Math.floor(Math.random() * 100));
  useEffect(() => {
    const timer = setTimeout(() => {
      setCar(Math.floor(Math.random() * 100));
    }, 10000);
    return function () {
      clearTimeout(timer);
    };
  }, [car]);
  return (
    <>
      <img
        className={`absolute right-9 animate-run`}
        style={{ top: `${car}vh` }}
        src={car % 2 === 0 ? CarPixel : car % 3 === 1 ? CarPixel2 : CarPixel3}
        alt="Car pixel"
        width={200}
      />
    </>
  );
}
