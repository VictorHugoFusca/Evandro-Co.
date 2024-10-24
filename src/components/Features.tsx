import React from 'react';
import constants from '../constants';
import FeaturesListContainer from './FeaturesListContainer';
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

// Definindo as perguntas frequentes
const faqs = [
  {
    question: "Quanto tempo demora para instalar um ar-condicionado?",
    answer: "A instalação geralmente leva de 2 a 4 horas, podendo demorar mais se for uma instalação complexa.",
  },
  {
    question: "Por que minha geladeira está fazendo barulho?",
    answer: "Barulhos podem indicar problemas no compressor, ventilador ou peças soltas. Um técnico pode verificar.",
  },
  {
    question: "Posso instalar o ar-condicionado em qualquer ambiente?",
    answer: "Sim, mas é necessário avaliar o ambiente para garantir que o modelo e a instalação sejam adequados.",
  },
  {
    question: "Qual a diferença entre manutenção preventiva e corretiva?",
    answer: "A preventiva evita problemas futuros, enquanto a corretiva corrige defeitos já existentes. A preventiva é mais econômica a longo prazo.",
  },
  {
    question: "Qual é o custo médio de uma instalação de ar-condicionado?",
    answer: "O custo varia conforme o tipo de aparelho e o ambiente. Um orçamento é oferecido após a avaliação técnica.",
  },
];

// Componente Features
const Features: React.FC = () => {
  return (
    <section id="central-de-ajuda" className='bg-sky-100'>
      <div className='max-w-[1400px] mx-auto flex flex-col lg:gap-20 pt-12 lg:pt-20'>
        <h1 className='mx-auto text-4xl font-bold mb-12 text-center lg:text-left'>
          Esclareça Suas Dúvidas: Perguntas Frequentes.
        </h1>
        <div className='flex flex-col lg:flex-row justify-center bg-sky-100 lg:bg-blue-200 rounded-xl'>
          <div className='mx-auto lg:mx-0 justify-center md:px-20 lg:w-1/2 bg-sky-100 py-14 md:pt-10 rounded-bl-lg flex flex-col-reverse lg:flex-col px-6 lg:px-20 lg:bg-blue-200 py-6'>
            {/* Seção FAQ */}
            <dl className="mt-6 space-y-6 divide-y divide-gray-500">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6 mb-4">
                  {({ open }) => (
                    <>
                      <dt className="mb-2">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
          
          {/* Seção de Imagem */}
          <div className='bg-blue-200 px-10 rounded-t-full relative flex items-end'>
            <img src={constants.IMAGES.manImage4} className='w-[300px] h-auto mx-auto' alt="" />
          </div>
        </div>
        <FeaturesListContainer />
      </div>
    </section>
  );
}

export default Features;
