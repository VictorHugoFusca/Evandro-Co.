import { useWindowSize } from '@react-hook/window-size';
import React from 'react';
import constants from '../constants';

const Partners: React.FC = () => {
    const [windowWidth] = useWindowSize();
    const isMobile = windowWidth <= 767;

    return (
        <section className="flex">
            <ul
                className={`max-w-[1200px] mx-auto py-10 flex flex-wrap justify-between ${
                    isMobile ? 'grid grid-cols-4 gap-7' : 'gap-5'
                }`} // Aplica gap-10 no mobile e gap-5 no desktop
            >
                {Object.entries(constants.LOGOS).map(([key, value]) => (
                    <li key={key} className="flex justify-center items-center">
                        <img
                            src={value}
                            alt={`${key} logo`}
                            className={`${isMobile ? 'w-20' : 'w-[5vw]'} h-auto`} // Aumenta o tamanho das logos no mobile
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Partners;
