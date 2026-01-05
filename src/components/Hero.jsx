
import { useEffect, useState } from "react";
import TecladoImg from './img/Teclado-Mecânico-RGB.jpg';
import MouseImg from './img/Mouse-Gamer-Pro.jpg';
import HeadsetImg from './img/Headset-7.1-Gamer.jpg';
import MonitorImg from './img/Monitor-144Hz.jpg';

const offers = [
  {
    id: 1,
    name: "Teclado Mecânico RGB",
    price: "R$ 599,00",
    description: "Switch mecânico, RGB full e alta performance.",
    image: TecladoImg,
  },
  {
    id: 2,
    name: "Mouse Gamer Pro + Teclado + Mouse Pad",
    price: "R$ 250,00",
    description: "Sensor preciso e design ergonômico.",
    image: MouseImg,
  },
  {
    id: 3,
    name: "Headset Gamer 7.1",
    price: "R$ 499,00",
    description: "Áudio imersivo com cancelamento de ruído.",
    image: HeadsetImg,
  },
   {
    id: 4,
    name: "Monitor 144Hz",
    price: "R$ 1.250,00",
    description: "Monitor de alta qualidade de resolução.",
    image:  MonitorImg,
  },
];

function Hero() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const offer = offers[index];


  return (

    <section id="Hero" className="pt-20">
      <div className="max-w-5xl md:max-w-6xl mx-auto gap-4 px-5">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 md:p-12 text-center">

          {/* TÍTULO */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ofertas em Destaque
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            Veja os produtos gamer que estão bombando agora.
          </p>

          {/* SLIDER CENTRAL */}
          <div className="flex flex-col items-center gap-6">

            {/* IMAGEM */}
            <img
              key={offer.id}
              src={offer.image}
              alt={offer.name}
              className="w-full max-w-3xl h-46 md:h-57 object-cover rounded-xl  transition-all duration-700"
            />

            {/* INFO DO PRODUTO */}

            <div className="text-center">
              <h3 className="text-xl font-semibold">{offer.name}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {offer.description}
              </p>
              <p className="text-blue-400 text-lg font-bold mt-2">
                {offer.price}
              </p>
            </div>

            {/* BOTÃO CENTRALIZADO */}

            <button className="mt-4 bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-lg font-semibold cursor-pointer">
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Hero;
