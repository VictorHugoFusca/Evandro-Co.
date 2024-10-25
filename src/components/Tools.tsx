import React from 'react';
import toolsImage from "../assets/images/tools.svg";

const Tools: React.FC = () => {
    // Função de rolagem suave
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        const target = document.querySelector(targetId);
        if (target) {
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 40; // Ajuste o offset conforme necessário

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div id="tools" className="max-w-[1400px] mx-auto md:pt-44 pt-36 md:px-24 px-5 flex md:flex-row flex-col items-center md:justify-around justify-center md:gap-5 gap-10">
            <div className="flex-1 flex flex-col gap-8 md:gap-5">
                <span className="text-center lg:my-20 sm:text-left font-bold xl:text-6xl text-5xl max-w-[700px] leading-[70px] md:leading-[58px] xl:leading-[68px] ">
                    Garanta Excelência com Atendimento Especializado
                </span>
                <p className="leading-7 text-gray-600 md:max-w-[580px] max-w-[95%]">
                    Para garantir um atendimento excepcional, contamos com um chatbot integrado que oferece suporte 24 horas e assistência na navegação. Nossa equipe assegura respostas rápidas e prioriza o conforto dos clientes, oferecendo preços justos que refletem a qualidade dos serviços prestados.
                </p>
                <a 
                    href="#banner" // Ajustando o href para o ID da seção Banner
                    className="text-blue-600 font-semibold"
                    onClick={(event) => handleSmoothScroll(event, '#banner')} // Chamada da função de rolagem suave
                >
                    Verifique as ferramentas
                </a>
            </div>
            <div className='flex justify-center'>
                <img src={toolsImage} className="w-auto h-auto object-cover" />
            </div>
        </div>
    );
};

export default Tools;
