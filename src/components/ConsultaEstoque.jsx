import { useState } from "react";

export default function ConsultaEstoque() {
  const [data, setData] = useState([
    {
      id: "1",
      categoria: "SUV",
      marca: "Toyota",
      modelo: "Rav4",
      ano: "2008",
      preco: "53.000,00",
    },
    {
      id: "2",
      categoria: "Hatch",
      marca: "Renault",
      modelo: "Kwid",
      ano: "2016",
      preco: "42.000,00",
    },
  ]);
  const handleAdd = () => {
    setData(...data);
  };    
  return (
    <div className="border border-black p-12 flex flex-col gap-8">
      <div className="flex flex-col gap-2 text-lg">
        <h1>Pesquisar um carro por categoria:</h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="border border-[rgba(0,0,0,0.33)] px-4 py-1 outline-none"
            placeholder="Digite a categoria"
          />
          <button className="px-6 py-1 bg-black text-white">Pesquisar</button>
        </div>
      </div>
      <div className="text-xl">
        <h1>Carros no estoque:</h1>
        <table className="w-full">
          <tr>
            <th className="border border-black px-5">Id</th>
            <th className="border border-black px-5">Categoria</th>
            <th className="border border-black px-5">Marca</th>
            <th className="border border-black px-5">Modelo</th>
            <th className="border border-black px-5">Ano</th>
            <th className="border border-black px-5">Preço</th>
          </tr>
          {data.map((data) => (
            <tr>
              <td className="border border-black px-5">{data.id}</td>
              <td className="border border-black px-5">{data.categoria}</td>
              <td className="border border-black px-5">{data.marca}</td>
              <td className="border border-black px-5">{data.modelo}</td>
              <td className="border border-black px-5">{data.ano}</td>
              <td className="border border-black px-5">{data.preco}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
