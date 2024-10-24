import React from 'react';
import baloons from "../assets/images/eisso.jpg";

const Banner: React.FC = () => {
    return (
        <div className="max-w-[1400px] mx-auto md:pt-44 pt-28 px-0 md:px-10 lg:px-12">
            <div
                className="flex w-full md:rounded-3xl relative md:h-[50vh] items-center justify-between bg-cover bg-center md:p-0 p-8"
                style={{ 
                    backgroundImage: `url(${baloons})`,
                    backgroundPosition: 'left 30%', // Ajusta para 10% do topo e mais para a esquerda
                    backgroundSize: '100%', // Diminui um pouco o tamanho para que a imagem fique mais alinhada
                }}
            >
                <div className="w-full h-full absolute md:rounded-3xl left-0 top-0 bg-[#581C87] opacity-75 z-10"></div>
                <div></div>
                <div className="flex flex-col gap-8 md:w-[70%] lg:w-[55%] w-full z-20">
                    <span className="font-bold md:text-[64px] text-white text-[50px] max-w-full md:leading-[70px] leading-[70px]">
					Problemas vem e se resolve com facilidade
                    </span>
                    <p className="leading-7 text-white md:max-w-[580px] max-w-[95%]">
					Na Evandro & Co., entendemos que imprevistos podem ocorrer a qualquer momento. Seja uma falha no ar-condicionado ou uma geladeira com problemas, nossa equipe está sempre pronta para agir!
                    </p>
                    <a
                        href="#"
                        className="text-white font-semibold"
                    >
                        Melhore o fluxo de trabalho
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
