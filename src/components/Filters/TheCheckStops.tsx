'use client';

import { useFilters } from '../../../store/useFilters';

function TheCheckStops() {
  const { stops, selectedStops, toggleStop } = useFilters();
  return (
    <div className="grid gap-4">
      <h2 className="font-bold">Количество пересадок</h2>
      <div className="grid gap-4">
        {stops.map(({ id, value, name }) => (
          <div key={id} className="flex items-center gap-4">
            <input
              className="w-6 h-6 cursor-pointer"
              type="checkbox"
              name={value}
              id={value}
              checked={selectedStops.includes(value)}
              onChange={() => toggleStop(value)}
            />
            <label className="cursor-pointer" htmlFor={value}>
              {name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheCheckStops;
