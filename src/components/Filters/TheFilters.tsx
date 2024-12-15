import TheCurrencyButtons from './TheCurrencyButtons';

function TheFilters() {
  return (
    <div className="grid gap-4 bg-zinc-600 rounded-lg h-full p-4 text-white ">
      <TheCurrencyButtons />
      <div className="grid gap-4">
        <h2 className="font-bold">Количество пересадок</h2>
        <div className="grid gap-4">
          <div className="flex items-center gap-4 ">
            <input className="w-6 h-6 cursor-pointer" type="checkbox" name="" id="all" />
            <label className="cursor-pointer" htmlFor="all">
              Все
            </label>
          </div>
          <div className="flex items-center gap-4 ">
            <input className="w-6 h-6 cursor-pointer" type="checkbox" name="" id="all" />
            <label className="cursor-pointer" htmlFor="all">
              без пересадок
            </label>
          </div>
          <div className="flex items-center gap-4 ">
            <input className="w-6 h-6 cursor-pointer" type="checkbox" name="" id="all" />
            <label className="cursor-pointer" htmlFor="all">
              1 пересадка
            </label>
          </div>
          <div className="flex items-center gap-4 ">
            <input className="w-6 h-6 cursor-pointer" type="checkbox" name="" id="all" />
            <label className="cursor-pointer" htmlFor="all">
              2 пересадки
            </label>
          </div>
          <div className="flex items-center gap-4 ">
            <input className="w-6 h-6 cursor-pointer" type="checkbox" name="" id="all" />
            <label className="cursor-pointer" htmlFor="all">
              3 пересадки
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheFilters;
