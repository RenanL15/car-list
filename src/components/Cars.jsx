import { useEffect, useState } from "react";
import CarPixel from "../assets/images/car_pixel.gif";
import CarPixel2 from "../assets/images/car_pixel_2.gif";
import CarPixel3 from "../assets/images/car_pixel_3.gif";

export default function Cars() {
  const count = [1, 2, 3];
  const randomCount = Math.floor(Math.random() * 3);
  const [car, setCar] = useState(Math.floor(Math.random() * 80));
  useEffect(() => {
    const timer = setTimeout(() => {
      setCar(Math.floor(Math.random() * 80));
      // console.log(randomCount);
      console.log(car);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [car]);
  return (
    <>
      <img
        className={`fixed translate-x-[100vw] animate-run`}
        style={{ top: `${car}vh` }}
        src={
          count[randomCount] === 1
            ? CarPixel
            : count[randomCount] === 2
            ? CarPixel2
            : CarPixel3
        }
        alt="Car pixel"
        width={200}
      />
    </>
  );
}
