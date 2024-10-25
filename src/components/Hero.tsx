import React from 'react';
import constants from '../constants';

const Hero: React.FC = () => {
    // Função de rolagem suave
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        const target = document.querySelector(targetId);
        if (target) {
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;

            // Define o offset desejado (pode ser ajustado conforme necessário)
            const offsetPosition = elementPosition - 100; // Exemplo de offset de 100px

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className='border-b border-slate-300 bg-blue-100'>
            {/* CSS Personalizado para ocultar a imagem em resoluções menores que 766px e adicionar gradiente */}
            <style>
                {`
                @media (max-width: 767px) {
                    .hero-image {
                        display: none; /* Oculta a imagem */
                    }
                    .hero-gradient {
                        background: linear-gradient(to right, #e0ecfc, #b5d2f7, #9da3d2); /* Gradiente horizontal */
                    }
                }
                `}
            </style>
            <div className="max-w-[1400px] mx-auto md:h-[70vh] h-auto flex md:flex-row flex-col items-center 
            justify-between gap-8 md:px-24 px-8 box-border md:py-0 py-5 hero-gradient">
                <div className="flex flex-col gap-4">
                    <span className="text-5xl font-bold md:text-4xl leading-[65px] md:leading-[50px] lg:text-5xl xl:text-[45px] xl:leading-[82px] max-w-[650px] lg:leading-[65px] text-center md:text-left">
                        Conforto em Cada Instalação Seu Clima, Nossa Prioridade!
                    </span>
                    <span className="leading-7 text-gray-600 md:max-w-[600px] flex mb-8 text-center sm:text-left">
                        Oferecemos serviços de instalação de ar condicionado e manutenção de geladeiras com qualidade e eficiência. Nossa equipe é dedicada a garantir o seu conforto, proporcionando soluções personalizadas que atendem às suas necessidades. Confie em nós para manter o clima perfeito em sua casa ou empresa!
                    </span>

                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-gray-400 hover:ring-gray-700 ml-[-40px]">
                            Fique por dentro das nossas atualizações e novidades.{" "}
                            <a 
                                href="#option-card" // Altere aqui para o ID da seção onde o OptionCard está
                                className="font-semibold text-blue-600"
                                onClick={(event) => handleSmoothScroll(event, '#option-card')} // Chamada da função de rolagem suave
                            >
                                <span className="absolute inset-0" aria-hidden="true" />
                                Saiba mais <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Container flex para a imagem com a classe hero-image */}
                <div className="flex items-end h-full w-[42%] hero-image">
                    <img
                        src={constants.IMAGES.heroImage}
                        className="rounded-xl w-full h-auto"
                        style={{
                            maxWidth: "1000px",
                            maxHeight: "1000px",
                            objectFit: "contain",
                        }}
                        alt="heroImage"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
