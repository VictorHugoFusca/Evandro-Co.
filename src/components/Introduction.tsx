import React from 'react';
import constants from '../constants';

const Introduction: React.FC = () => {
  return (
    <div id="introduction" className="max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row px-5 pt-20 sm:pt-24 md:pt-14 md:px-10 gap-0 md:gap-10 lg:gap-10">
      <div className='flex-1 flex items-center gap-4 py-24 w-full md:justify-normal justify-center px-1'>
        {constants.INTRODUCTIONIMAGES.map(({ src }, index: number) => {
          return (
            <div key={index} className={`flex-1 ${index === 1 ? "mt-[-120px]" : ""}`}>
              <img src={src} className="w-full h-auto object-cover" />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-5 flex-1 px-0 lg:px-20">
        <span className="text-center lg:my-20 sm:text-left font-bold xl:text-6xl text-5xl max-w-[700px] leading-[70px] md:leading-[58px] xl:leading-[68px]">
          Instalação Fácil e Rápida
        </span>
        <p className="leading-7 text-gray-600">
          Evite dores de cabeça na instalação do seu ar-condicionado escolhendo os profissionais especializados da Evandro & Co!
          A instalação é um processo complexo que exige conhecimento técnico, e não deve ser feita de forma amadora. 
          Além de garantir o bom desempenho e a vida útil do aparelho, a instalação correta evita problemas futuros e falhas inesperadas.
        </p>
        <a href="#" className="text-blue-600 font-semibold">
          Veja mais logo abaixo
        </a>
      </div>
    </div>
  );
};

export default Introduction;
