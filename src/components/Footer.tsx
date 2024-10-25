import React from 'react';
import constants from '../constants';
import logo from '../assets/logos/1 (1).png'; 

const Footer: React.FC = () => {
    // Função para rolagem suave para o topo da página
    const handleFooterLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="border-t border-slate-300">
            <div className="max-w-[1400px] mx-auto md:h-24 md:py-0 py-5 md:px-52 px-5 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-5">
                <img src={logo} alt="AstraSoft Logo" className='h-10' />
                <div className="flex items-center gap-6">
                    {constants.FOOTERLINKS.map((link) => {
                        return (
                            <a
                                className="font-medium text-[15px] text-gray-600"
                                href={link.path}
                                key={link.title}
                                onClick={handleFooterLinkClick} // Adiciona a função para o clique
                            >
                                {link.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;
