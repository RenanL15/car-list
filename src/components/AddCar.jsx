import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function AddCar({ data, setData, add, setAdd }) {
  const [newCar, setNewCar] = useState({
    categoria: "",
    marca: "",
    modelo: "",
    ano: "",
    preco: "",
  });
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 bg-white bg-opacity-25 min-h-screen w-screen z-50 text-2xl">
      <div className="px-16 py-16 bg-neutral-900 rounded-2xl animate-zoomIn">
        <IoMdClose
          onClick={() => setAdd(false)}
          size={40}
          color="#fff"
          className="relative ml-auto bottom-12 left-10 cursor-pointer"
        />
        <h1 className="font-[VSC] text-green-500 mb-12 -mt-12 text-center font-bold text-3xl">
          Adicione um carro
        </h1>
        <div className="grid grid-cols-2 items-center gap-8 text-xl text-white">
          <div className="flex flex-col items-start gap-2 font-[VSC]">
            <label className="text-base">Digite a categoria do carro:</label>
            <input
              type="text"
              value={newCar.categoria}
              onChange={(e) =>
                setNewCar({ ...newCar, categoria: e.target.value })
              }
              className="p-2 rounded w-80 outline-none bg-neutral-500 placeholder:text-white"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-[VSC]">
            <label className="text-base">Digite a marca do carro:</label>
            <input
              type="text"
              value={newCar.marca}
              onChange={(e) => setNewCar({ ...newCar, marca: e.target.value })}
              className="p-2 rounded w-80 outline-none bg-neutral-500 placeholder:text-white"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-[VSC]">
            <label className="text-base">Digite o modelo do carro:</label>
            <input
              type="text"
              value={newCar.modelo}
              onChange={(e) => setNewCar({ ...newCar, modelo: e.target.value })}
              className="p-2 rounded w-80 outline-none bg-neutral-500 placeholder:text-white"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-[VSC]">
            <label className="text-base">Digite o ano do carro:</label>
            <input
              type="text"
              value={newCar.ano}
              onChange={(e) => setNewCar({ ...newCar, ano: e.target.value })}
              className="p-2 rounded w-80 outline-none bg-neutral-500 placeholder:text-white"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-[VSC]">
            <label className="text-base">Digite o preço do carro:</label>
            <input
              type="text"
              value={newCar.preco}
              onChange={(e) => setNewCar({ ...newCar, preco: e.target.value })}
              className="p-2 rounded w-80 outline-none bg-neutral-500 placeholder:text-white"
            />
          </div>
          <button
            onClick={() => {
              console.log(data);
              setData([
                ...data,
                {
                  id: data[data.length - 1].id + 1,
                  categoria: newCar.categoria,
                  marca: newCar.marca,
                  modelo: newCar.modelo,
                  ano: newCar.ano,
                  preco: newCar.preco,
                },
              ]);
              // console.log(data);
              setAdd(false);
              document.body.style = "overflow: visible";
            }}
            className="text-center px-12 py-2 bg-slate-800 text-white rounded-xl">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
