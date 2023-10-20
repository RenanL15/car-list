import { useEffect, useState } from "react";
import CarPixel from "../assets/images/car_pixel.gif";
import CarPixel2 from "../assets/images/car_pixel_2.gif";
import CarPixel3 from "../assets/images/car_pixel_3.gif";

export default function ConsultaEstoque() {
  const [categoria, setCategoria] = useState("");
  const [car1, setCar1] = useState(0);
  const [car2, setCar2] = useState(0);
  const [car3, setCar3] = useState(0);
  const [filteredData, setFilteredData] = useState([
    {
      id: "",
      categoria: "",
      marca: "",
      modelo: "",
      ano: "",
      preco: "",
    },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      categoria: "SUV",
      marca: "Toyota",
      modelo: "Rav4",
      ano: "2008",
      preco: "53.000,00",
    },
    {
      id: 2,
      categoria: "Hatch",
      marca: "Renault",
      modelo: "Kwid",
      ano: "2016",
      preco: "42.000,00",
    },
    {
      id: 3,
      categoria: "Sedan",
      marca: "Volkswagen",
      modelo: "Rav4",
      ano: "2010",
      preco: "35.000,00",
    },
    {
      id: 4,
      categoria: "Hatch",
      marca: "Kia",
      modelo: "Sportage",
      ano: "2010",
      preco: "56.000,00",
    },
    {
      id: 5,
      categoria: "Sedan",
      marca: "Honda",
      modelo: "Civic",
      ano: "2014",
      preco: "85.000,00",
    },
    {
      id: 6,
      categoria: "Hatch",
      marca: "Honda",
      modelo: "Civic",
      ano: "1995",
      preco: "14.000,00",
    },
    {
      id: 7,
      categoria: "SUV",
      marca: "Volkswagen",
      modelo: "Golf GTI",
      ano: "2017",
      preco: "157.000,00",
    },
    {
      id: 8,
      categoria: "Hatch",
      marca: "Volkswagen",
      modelo: "Gol",
      ano: "2008",
      preco: "22.000,00",
    },
    {
      id: 9,
      categoria: "SUV",
      marca: "Toyota",
      modelo: "Hilux",
      ano: "2010",
      preco: "115.000,00",
    },
    {
      id: 10,
      categoria: "Sedan",
      marca: "Renault",
      modelo: "Corola",
      ano: "2015",
      preco: "94.000,00",
    },
  ]);

  useEffect(() => {
    // const regex = new RegExp(categoria, "g")
    setFilteredData([
      ...data.filter((e) =>
        e.categoria.toLowerCase().includes(categoria.toLowerCase())
      ),
    ]);
  }, [categoria]);

  useEffect(() => {
    setTimeout(() => {
      setCar1(Math.floor(Math.random() * 800));
      setCar2(Math.floor(Math.random() * 800));
      setCar3(Math.floor(Math.random() * 800));
    }, 10000);
  }, [car1, car2, car3]);
  return (
    <div className="border border-black bg-black bg-opacity-70 text-white pb-12 px-12 flex flex-col gap-8">
      <div className="flex flex-col gap-2 text-lg border-b border-white py-12 sticky top-0 bottom-0">
        <h1>Pesquisar um carro por categoria:</h1>
        <div className="flex items-center gap-2 text-2xl">
          <input
            type="text"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
            className="w-96 border border-[rgba(0,0,0,0.33)] bg-slate-200 text-black px-2 py-2 outline-none"
            placeholder="Digite a categoria"
          />
          {/* <button
            // onClick={handleSearch}
            className="px-6 py-2 bg-slate-400 text-white">
            Pesquisar
          </button> */}
          <img
            className={`absolute right-9 animate-run`}
            style={{ top: `${car1}px` }}
            src={
              car1 % 2 === 0 ? CarPixel : car1 % 3 === 1 ? CarPixel2 : CarPixel3
            }
            alt="Car pixel"
            width={200}
          />
          {/* <img
            className="absolute right-9 animate-run"
            style={{ top: `${car2}px` }}
            src={CarPixel2}
            alt="Car pixel"
            width={200}
          />
          <img
            className="absolute right-9 animate-run"
            style={{ top: `${car3}px` }}
            src={CarPixel3}
            alt="Car pixel"
            width={200}
          /> */}
        </div>
      </div>
      <div className="text-lg">
        <h1>Carros no estoque:</h1>
        <table className="w-full mt-2">
          <thead className="font-['VSC'] font-bold">
            <tr>
              <th className="border border-white px-5 py-5 bg-slate-800">Id</th>
              <th className="border border-white px-5 py-5 bg-slate-800">
                Categoria
              </th>
              <th className="border border-white px-5 py-5 bg-slate-800">
                Marca
              </th>
              <th className="border border-white px-5 py-5 bg-slate-800">
                Modelo
              </th>
              <th className="border border-white px-5 py-5 bg-slate-800">
                Ano
              </th>
              <th className="border border-white px-5 py-5 bg-slate-800">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="font-['VSC']">
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td className="border border-white pl-5 pr-28 py-5">
                  {index + 1}
                </td>
                <td className="border border-white pl-5 pr-28 py-5">
                  {data.categoria}
                </td>
                <td className="border border-white pl-5 pr-28 py-5">
                  {data.marca}
                </td>
                <td className="border border-white pl-5 pr-28 py-5">
                  {data.modelo}
                </td>
                <td className="border border-white pl-5 pr-28 py-5">
                  {data.ano}
                </td>
                <td className="border border-white pl-5 pr-28 py-5">
                  {data.preco}
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center border border-white py-32">
                  Nenhum resultado encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
