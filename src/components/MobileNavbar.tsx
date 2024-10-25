import { useWindowSize } from '@react-hook/window-size';
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import constants from '../constants';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAlpJA_HMxaYcYi56sQopSNTrfh7vxzGXI",
    authDomain: "evocative-tower-408111.firebaseapp.com",
    projectId: "evocative-tower-408111",
    storageBucket: "evocative-tower-408111.appspot.com",
    messagingSenderId: "579877977779",
    appId: "1:579877977779:web:4093b5a183150266bb3ac6",
    measurementId: "G-NNVNTCQ1YH"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const MobileNavbar: React.FC = () => {
    const [windowWidth] = useWindowSize();
    const [active, setActive] = useState(false);
    const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null); // Estado para o usuário autenticado

    const toggleMobileMenu = () => {
        setIsMobileMenuActive((prevState) => !prevState);
    };

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 780) {
            setIsMobileMenuActive(false);
        }
    }, [windowWidth]);

    // Função de login
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUser(user);
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    // Função para rolagem suave
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string, title: string) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        const target = document.querySelector(targetId);
        if (target) {
            let offset = 0; // Inicializa o offset

            // Ajuste específico para "Nossos Serviços"
            if (title === "Nossos Serviços") {
                offset = 80; // Ajuste para um valor maior se necessário
            }

            if (title === "Central de Ajuda") {
              offset = 57; // Ajuste para um valor maior se necessário
          }

            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={`flex md:hidden w-full h-24 bg-blue-100 sticky top-0 z-30 ${active && "bg-white border-b border-slate-300"}`}>
            <div className='w-[1400px] mx-auto h-24 px-5 flex items-center justify-between relative'>
                <button type='button' onClick={toggleMobileMenu}>
                    <RxHamburgerMenu className='w-5 h-auto' />
                </button>
                <span className='font-bold text-2xl text-gray-800'>Evandro & Co.</span>

                {isMobileMenuActive && (
                    <div className='flex flex-col bg-indigo-500 rounded-b-xl w-full absolute top-0 left-0 h-fit items-center gap-6 p-4'>
                        <div className='flex justify-between w-full px-5'>
                            <span className='text-slate-100 font-bold'>Evandro & Co.</span>
                            <button type='button' onClick={toggleMobileMenu}>
                                <IoClose className='w-6 h-auto text-slate-100' />
                            </button>
                        </div>
                        {constants.NAVLINKS.map(({ path, title }) => (
                            <a
                                key={title}
                                href={path}
                                className='font-medium text-[15px] px-2.5 hover:text-blue-700 transition-all hover:rounded-lg text-slate-100 hover:bg-orange-100 w-full text-center py-3'
                                onClick={(event) => {
                                    handleSmoothScroll(event, path, title); // Passando o evento, o caminho e o título
                                    toggleMobileMenu(); // Fecha o menu ao clicar no link
                                }}
                            >
                                {title}
                            </a>
                        ))}
                    </div>
                )}

                <div className='flex items-center gap-5'>
                    {user ? (
                        <div className='flex items-center gap-2'>
                            <span className='text-blue-600 font-semibold'>{user.displayName}</span>
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className='w-8 h-8 rounded-full'
                                    onError={(e) => { e.currentTarget.src = ''; }} // Define uma ação de fallback
                                />
                            ) : (
                                <div className='flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full'>
                                    {user.displayName?.charAt(0) + user.displayName?.split(' ')[1]?.charAt(0)} {/* Exibe iniciais */}
                                </div>
                            )}
                        </div>
                    ) : (
                        <button onClick={handleLogin} className='text-[#282973] font-semibold'>
                            Log in <span aria-hidden="true">&rarr;</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
