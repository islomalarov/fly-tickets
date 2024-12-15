import TheCheckStops from './TheCheckStops';
import TheCurrencyButtons from './TheCurrencyButtons';

function TheFilters() {
  return (
    <div className="grid gap-4 bg-zinc-600 rounded-lg h-full p-4 text-white ">
      <TheCurrencyButtons />
      <TheCheckStops />
    </div>
  );
}

export default TheFilters;
