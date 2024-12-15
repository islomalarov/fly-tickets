'use client';
import { useFilters } from '../../../store/useFilters';

function TheCurrencyButtons() {
  const { currency, changeCurrency } = useFilters();
  return (
    <div className="grid gap-4">
      <h2 className="font-bold">Валюта</h2>
      <div className="flex">
        {['RUB', 'USD', 'EUR'].map((cur, index) => (
          <button
            key={cur}
            className={`border border-yellow-500 px-4 py-2 ${
              index === 0 ? 'rounded-l-lg' : index === 2 ? 'rounded-r-lg' : ''
            } ${currency === cur ? 'bg-yellow-500 text-white' : ''}`}
            onClick={() => changeCurrency(cur)}>
            {cur}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TheCurrencyButtons;
