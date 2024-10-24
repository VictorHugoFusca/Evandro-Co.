import React, { useEffect, useState } from 'react';
import constants from '../constants';
import logo from '../assets/logos/testando (1).png'; // ajuste o caminho para sua imagem
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
const analytics = getAnalytics(app); // Apenas se você precisar de analytics
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Navbar: React.FC = () => {
    const [active, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState<string>(''); // Estado para o link ativo
    const [user, setUser] = useState<any>(null); // Estado para o usuário autenticado

    const isActive = () => {
        setActive(window.scrollY > 0);
    };

    const checkActiveLink = () => {
        const scrollY = window.scrollY;

        constants.NAVLINKS.forEach(({ path }) => {
            const target = document.querySelector(path);
            if (target) {
                const targetPosition = target.getBoundingClientRect();
                const isInViewport = (
                    targetPosition.top <= window.innerHeight &&
                    targetPosition.bottom >= 0
                );

                if (isInViewport) {
                    setActiveLink(path); // Atualiza o link ativo se estiver na viewport
                }
            }
        });

        // Se no topo da página, limpa o link ativo para ""
        if (scrollY === 0) {
            setActiveLink(''); // Limpa o link ativo
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        window.addEventListener("scroll", checkActiveLink); // Adiciona verificação do link ativo na rolagem

        return () => {
            window.removeEventListener("scroll", isActive);
            window.removeEventListener("scroll", checkActiveLink);
        };
    }, []);

    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string, title: string) => {
        event.preventDefault(); // Previne o comportamento padrão do link
        const target = document.querySelector(targetId);
        if (target) {
            let offset = 70; // Ajuste padrão

            // Ajuste específico para "Sobre Nós"
            if (title === "Sobre Nós") {
                offset = -25; // Ajuste para um valor maior se necessário
            }

            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setActiveLink(targetId); // Atualiza o link ativo após o clique
        }
    };

    const handleLogoClick = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault(); // Previne o comportamento padrão se necessário
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rolagem suave para o topo
        });
        setActiveLink(''); // Limpa o link ativo ao voltar ao topo
    };

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

    return (
        <div className={`hidden md:flex w-full h-24 bg-blue-100 sticky top-0 z-30 ${active && "bg-white border-b border-slate-300"}`}>
            <div className='w-[1400px] mx-auto h-24 px-5 flex items-center justify-between'>
                <img 
                    src={logo} 
                    alt="AstraSoft Logo" 
                    className='h-14 cursor-pointer' // Adiciona um cursor pointer para indicar que é clicável
                    onClick={handleLogoClick} // Chama a função ao clicar na logo
                />

                <div className='hidden md:flex items-center gap-6'>
                    {constants.NAVLINKS.map(({ path, title }) => {
                        return (
                            <a
                                key={title}
                                href={path}
                                onClick={(event) => handleSmoothScroll(event, path, title)} // Passando o título do link
                                className={`font-medium text-[15px] px-2.5 transition-all ${activeLink === path ? 'text-blue-700' : 'hover:text-blue-700'}`} // Altera a cor com base no estado
                            >
                                {title}
                            </a>
                        );
                    })}
                </div>

                <div className='flex items-center gap-5'>
                    {user ? (
                        <div className='flex items-center gap-2'>
                            <span className='text-blue-600 font-semibold'>{user.displayName}</span>
                            {user.photoURL && (
                                <img 
                                    src={user.photoURL} 
                                    alt="User Profile" 
                                    className='w-8 h-8 rounded-full'
                                />
                            )}
                        </div>
                    ) : (
                        <button onClick={handleLogin} className='text-blue-600 font-semibold hover:text-gray-900 transition-all'>
                            Log in →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
