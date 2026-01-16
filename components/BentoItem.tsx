import React from 'react';

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  onClick?: () => void;
}

export const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = "", 
  noBorder = false,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl bg-charcoal
        ${!noBorder ? 'border border-steel' : ''}
        transition-all duration-500 ease-out
        hover:border-neon/50 hover:shadow-[0_0_20px_rgba(255,59,48,0.15)]
        group
        ${className}
      `}
    >
      {children}
    </div>
  );
};