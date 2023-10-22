import { useEffect, useState } from "react";
import Cars from "./Cars";
import AddCar from "./AddCar";

export default function Lista() {
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [add, setAdd] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
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
    // {
    //   id: 6,
    //   categoria: "Hatch",
    //   marca: "Honda",
    //   modelo: "Civic",
    //   ano: "1995",
    //   preco: "14.000,00",
    // },
    // {
    //   id: 7,
    //   categoria: "SUV",
    //   marca: "Volkswagen",
    //   modelo: "Golf GTI",
    //   ano: "2017",
    //   preco: "157.000,00",
    // },
    // {
    //   id: 8,
    //   categoria: "Hatch",
    //   marca: "Volkswagen",
    //   modelo: "Gol",
    //   ano: "2008",
    //   preco: "22.000,00",
    // },
    // {
    //   id: 9,
    //   categoria: "SUV",
    //   marca: "Toyota",
    //   modelo: "Hilux",
    //   ano: "2010",
    //   preco: "115.000,00",
    // },
    // {
    //   id: 10,
    //   categoria: "Sedan",
    //   marca: "Renault",
    //   modelo: "Corola",
    //   ano: "2015",
    //   preco: "94.000,00",
    // },
    // {
    //   id: 11,
    //   categoria: "SUV",
    //   marca: "Toyota",
    //   modelo: "Rav4",
    //   ano: "2018",
    //   preco: "110.500,00",
    // },
    // {
    //   id: 12,
    //   categoria: "Hatchback",
    //   marca: "Volkswagen",
    //   modelo: "Golf",
    //   ano: "2017",
    //   preco: "85.200,00",
    // },
    // {
    //   id: 13,
    //   categoria: "Sedan",
    //   marca: "Honda",
    //   modelo: "Civic",
    //   ano: "2016",
    //   preco: "98.700,00",
    // },
    // {
    //   id: 14,
    //   categoria: "SUV",
    //   marca: "Ford",
    //   modelo: "Escape",
    //   ano: "2019",
    //   preco: "115.300,00",
    // },
    // {
    //   id: 15,
    //   categoria: "Convertible",
    //   marca: "Chevrolet",
    //   modelo: "Camaro",
    //   ano: "2018",
    //   preco: "135.000,00",
    // },
    // {
    //   id: 16,
    //   categoria: "Sedan",
    //   marca: "Nissan",
    //   modelo: "Altima",
    //   ano: "2017",
    //   preco: "92.600,00",
    // },
    // {
    //   id: 17,
    //   categoria: "SUV",
    //   marca: "Mazda",
    //   modelo: "CX-5",
    //   ano: "2019",
    //   preco: "112.800,00",
    // },
    // {
    //   id: 18,
    //   categoria: "Hatchback",
    //   marca: "Hyundai",
    //   modelo: "Elantra GT",
    //   ano: "2016",
    //   preco: "88.400,00",
    // },
    // {
    //   id: 19,
    //   categoria: "Sedan",
    //   marca: "Kia",
    //   modelo: "Optima",
    //   ano: "2017",
    //   preco: "94.900,00",
    // },
    // {
    //   id: 20,
    //   categoria: "SUV",
    //   marca: "Subaru",
    //   modelo: "Outback",
    //   ano: "2018",
    //   preco: "107.600,00",
    // },
    // {
    //   id: 21,
    //   categoria: "SUV",
    //   marca: "Jeep",
    //   modelo: "Cherokee",
    //   ano: "2019",
    //   preco: "118.200,00",
    // },
    // {
    //   id: 22,
    //   categoria: "Sedan",
    //   marca: "Ford",
    //   modelo: "Fusion",
    //   ano: "2018",
    //   preco: "105.400,00",
    // },
    // {
    //   id: 23,
    //   categoria: "Hatchback",
    //   marca: "Chevrolet",
    //   modelo: "Spark",
    //   ano: "2017",
    //   preco: "78.900,00",
    // },
    // {
    //   id: 24,
    //   categoria: "SUV",
    //   marca: "Hyundai",
    //   modelo: "Tucson",
    //   ano: "2018",
    //   preco: "102.700,00",
    // },
    // {
    //   id: 25,
    //   categoria: "Convertible",
    //   marca: "Mazda",
    //   modelo: "MX-5 Miata",
    //   ano: "2019",
    //   preco: "124.500,00",
    // },
    // {
    //   id: 26,
    //   categoria: "Sedan",
    //   marca: "Kia",
    //   modelo: "Forte",
    //   ano: "2016",
    //   preco: "86.300,00",
    // },
    // {
    //   id: 27,
    //   categoria: "Hatchback",
    //   marca: "Volkswagen",
    //   modelo: "Polo",
    //   ano: "2017",
    //   preco: "82.100,00",
    // },
    // {
    //   id: 28,
    //   categoria: "SUV",
    //   marca: "Subaru",
    //   modelo: "Forester",
    //   ano: "2018",
    //   preco: "109.800,00",
    // },
    // {
    //   id: 29,
    //   categoria: "Sedan",
    //   marca: "Toyota",
    //   modelo: "Camry",
    //   ano: "2017",
    //   preco: "97.600,00",
    // },
    // {
    //   id: 30,
    //   categoria: "Hatchback",
    //   marca: "Honda",
    //   modelo: "Fit",
    //   ano: "2016",
    //   preco: "79.400,00",
    // },
    // {
    //   id: 31,
    //   categoria: "Sedan",
    //   marca: "Ford",
    //   modelo: "Focus",
    //   ano: "2017",
    //   preco: "89.200,00",
    // },
    // {
    //   id: 32,
    //   categoria: "Convertible",
    //   marca: "Chevrolet",
    //   modelo: "Corvette",
    //   ano: "2019",
    //   preco: "145.300,00",
    // },
    // {
    //   id: 33,
    //   categoria: "Hatchback",
    //   marca: "Nissan",
    //   modelo: "Versa",
    //   ano: "2018",
    //   preco: "75.600,00",
    // },
    // {
    //   id: 34,
    //   categoria: "Sedan",
    //   marca: "Hyundai",
    //   modelo: "Sonata",
    //   ano: "2017",
    //   preco: "96.700,00",
    // },
    // {
    //   id: 35,
    //   categoria: "SUV",
    //   marca: "Jeep",
    //   modelo: "Wrangler",
    //   ano: "2018",
    //   preco: "121.900,00",
    // },
    // {
    //   id: 36,
    //   categoria: "Convertible",
    //   marca: "Mazda",
    //   modelo: "RX-7",
    //   ano: "2019",
    //   preco: "136.800,00",
    // },
    // {
    //   id: 37,
    //   categoria: "Sedan",
    //   marca: "Honda",
    //   modelo: "Accord",
    //   ano: "2016",
    //   preco: "93.500,00",
    // },
    // {
    //   id: 38,
    //   categoria: "SUV",
    //   marca: "Audi",
    //   modelo: "Q5",
    //   ano: "2019",
    //   preco: "127.400,00",
    // },
    // {
    //   id: 39,
    //   categoria: "Convertible",
    //   marca: "BMW",
    //   modelo: "Z4",
    //   ano: "2018",
    //   preco: "141.200,00",
    // },
    // {
    //   id: 40,
    //   categoria: "SUV",
    //   marca: "Mercedes-Benz",
    //   modelo: "GLC",
    //   ano: "2017",
    //   preco: "129.700,00",
    // },
  ]);
  useEffect(() => {
    // console.log(storedData);
    setFilteredData([
      ...data.filter(
        (e) =>
          e.categoria.toLowerCase().includes(categoria.toLowerCase().trim()) &&
          e.marca.toLowerCase().includes(marca.toLowerCase().trim()) &&
          e.modelo.toLowerCase().includes(modelo.toLowerCase().trim())
      ),
    ]);
  }, [data, categoria, marca, modelo]);

  return (
    <>
      {add && (
        <AddCar data={data} setData={setData} add={add} setAdd={setAdd} />
      )}
      <div className="border border-[rgba(255,255,255,0.5)] bg-gray-950 bg-opacity-70 text-white pb-12 px-12 flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-2xl border-b border-white py-12 sticky top-0 bottom-0">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-24">
              <div className="flex flex-col items-center gap-4">
                <label>Pesquisar um carro por categoria:</label>
                <input
                  type="text"
                  value={categoria}
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                  className="bg-slate-800 rounded-lg px-2 py-2 outline-none"
                  placeholder="Digite a categoria"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <label>Pesquisar um carro por marca:</label>
                <input
                  type="text"
                  value={marca}
                  onChange={(e) => {
                    setMarca(e.target.value);
                  }}
                  className="bg-slate-800 rounded-lg px-2 py-2 outline-none"
                  placeholder="Digite a marca"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <label>Pesquisar um carro por modelo:</label>
                <input
                  type="text"
                  value={modelo}
                  onChange={(e) => {
                    setModelo(e.target.value);
                  }}
                  className="bg-slate-800 rounded-lg px-2 py-2 outline-none"
                  placeholder="Digite o modelo"
                />
              </div>
            </div>
            <button
              onClick={() => {
                setAdd(true);
                document.body.style = "overflow: hidden";
              }}
              className="py-2 px-12 bg-yellow-800 rounded-lg">
              Adicionar carro
            </button>
          </div>
          <Cars />
        </div>
        <div className="text-lg">
          <h1>Carros no estoque:</h1>
          <table className="w-full mt-2">
            <thead className="font-['VSC'] font-bold">
              <tr>
                <th className="border border-white px-5 py-5 bg-slate-800">
                  Id
                </th>
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
                  <td className="border border-white pl-5 pr-28 py-6">
                    {data.id}
                  </td>
                  <td className="border border-white pl-5 pr-28 py-6">
                    {data.categoria}
                  </td>
                  <td className="border border-white pl-5 pr-28 py-6">
                    {data.marca}
                  </td>
                  <td className="border border-white pl-5 pr-28 py-6">
                    {data.modelo}
                  </td>
                  <td className="border border-white pl-5 pr-28 py-6">
                    {data.ano}
                  </td>
                  <td className="border border-white pl-5 pr-28 py-6">
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
    </>
  );
}
