import { useEffect, useState } from "react";

export default function ConsultaEstoque() {
  const [categoria, setCategoria] = useState("");
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
    setFilteredData([...data.filter((e) => e.categoria.includes(categoria))]);
  }, [categoria]);
  return (
    <div className="border border-black p-12 flex flex-col gap-8">
      <div className="flex flex-col gap-2 text-xl">
        <h1>Pesquisar um carro por categoria:</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
            className="border border-[rgba(0,0,0,0.33)] px-4 py-1 outline-none"
            placeholder="Digite a categoria"
          />
          <button
            // onClick={handleSearch}
            className="px-6 py-1 bg-black text-white"
          >
            Pesquisar
          </button>
        </div>
      </div>
      <div className="text-2xl">
        <h1>Carros no estoque:</h1>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2">Id</th>
              <th className="border border-black px-5 py-2">Categoria</th>
              <th className="border border-black px-5 py-2">Marca</th>
              <th className="border border-black px-5 py-2">Modelo</th>
              <th className="border border-black px-5 py-2">Ano</th>
              <th className="border border-black px-5 py-2">Preço</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr>
                <td className="border border-black pl-5 pr-28 py-2">
                  {data.id}
                </td>
                <td className="border border-black pl-5 pr-28 py-2">
                  {data.categoria}
                </td>
                <td className="border border-black pl-5 pr-28 py-2">
                  {data.marca}
                </td>
                <td className="border border-black pl-5 pr-28 py-2">
                  {data.modelo}
                </td>
                <td className="border border-black pl-5 pr-28 py-2">
                  {data.ano}
                </td>
                <td className="border border-black pl-5 pr-28 py-2">
                  {data.preco}
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center border border-black py-28 py-2">
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
