import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

interface IProps {
  label: string;
  description: string;
  className?: string;
  features: string[];
  isNew: boolean;
}

const OptionCard: React.FC<IProps> = ({ label, description, className, features, isNew }) => {
  return (
    <div id="option-card" className={`flex flex-col justify-between gap-5 rounded-lg bg-[#f4f5f6] ${className} pt-8 px-8 pb-7 relative`}>
      {isNew && <span className='absolute top-3 bg-green-500 text-white text-sm rounded-l-xl px-2 font-bold right-[-4px]'>Novo</span>}

      <div className='flex gap-2.5 py-5'>
        <div className='mt-1'>
          <FaStar className='w-6 h-auto text-indigo-300' />
        </div>
        <span 
          className='font-semibold' 
          style={{ fontSize: '1.5rem', lineHeight: '2rem' }}> 
          {label}
        </span>
      </div>

      <span className='break-all py-2'>{description}</span>

      <div className='border-t border-slate-300 pt-4 px-1 mb-2.5'>
        <span className='block py-4'>Benefícios</span>
        <ul className='text-sm font-semibold flex flex-col gap-2.5'>
          {features.map((feature) => {
            return (
              <li className='flex items-center gap-x-3' key={feature}>
                <FaCircleCheck className='w-5 h-auto text-blue-400' />
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      
      <a href="https://wa.me/5516996081830?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
      target="_blank" 
      rel="noopener noreferrer"
      className='w-full'>
      <button className='w-full bg-blue-400 py-3 rounded-lg text-white font-semibold hover:bg-blue-500 transition-all'>
      Saber Mais
      </button>
      </a>
    </div>
  );
}

export default OptionCard;
