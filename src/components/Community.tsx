import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone do WhatsApp
import { HiDocumentCheck } from "react-icons/hi2"; // Importando o ícone HiDocumentCheck

const Community: React.FC = () => {
    return (
        <div className="max-w-[1400px] mx-auto md:px-10 md:pt-20 pt-28 pb-20 xl:px-12 ">
            <div className="flex w-full md:rounded-3xl relative items-center justify-center md:p-0 p-8 md:py-10">
                <div className="w-full h-full absolute md:rounded-3xl left-0 top-0 bg-gradient-to-br from-[#1E40AF] to-[#701A75] z-10"></div>
                <div className="flex flex-col gap-8 md:w-[65%] w-full lg:w-[55%] z-20">
                    <div className="flex items-center justify-center gap-2"> {/* Flexbox para alinhar ícone e texto */}
                        <HiDocumentCheck className="text-white" style={{ fontSize: '50px', marginTop: '10px' }} /> {/* Ícone ajustado com margem superior */}
                        <span className="font-bold md:text-[60px] text-center text-white text-[50px] max-w-full md:leading-[80px] leading-[70px]">
                            Faça seu Orçamento 
                        </span>
                    </div>
                    <p className="leading-7 text-white text-center">
                        Solicite um orçamento sem compromisso para sua residência, comércio ou indústria através do nosso chat personalizado, ou se preferir, fale diretamente em nosso WhatsApp.
                    </p>
                    <a  
                        href="https://wa.me/5516996081830?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex justify-center"
                    >
                        <button className="bg-green-500 text-white rounded-lg px-3 h-12 max-w-[240px] self-center whitespace-nowrap flex items-center justify-center gap-2">
                            <FaWhatsapp className="text-white text-xl" /> {/* Ícone do WhatsApp com cor e tamanho ajustado */}
                            <span>Entre em contato</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Community;
