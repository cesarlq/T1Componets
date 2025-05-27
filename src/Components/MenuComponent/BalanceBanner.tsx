import React from 'react';

export interface BalanceBannerProps {
  className?: string;
  balance?: number | string;
  currency?: string;
  label?: string;
  onClick?: () => void;
  loading?: boolean;
}

export function BalanceBanner({
  className = '',
  balance = 1250.00,
  currency = '$',
  label = 'Balance disponible',
  onClick,
  loading = false
}: BalanceBannerProps) {
  
  const formatBalance = (amount: number | string) => {
    if (typeof amount === 'string') return amount;
    return new Intl.NumberFormat('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const content = (
    <div className={className}>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <div>{label}</div>
          <div>
            {currency}{formatBalance(balance)}
          </div>
        </div>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} type="button">
        {content}
      </button>
    );
  }

  return content;
}