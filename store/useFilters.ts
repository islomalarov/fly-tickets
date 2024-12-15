import { create } from 'zustand';
interface Stop {
  id: number;
  name: string;
  value: string;
}
interface Filters {
  currency: string;
  stops: Array<Stop>;
  selectedStops: string[];
  changeCurrency: (state: string) => void;
  toggleStop: (value: string) => void;
}
export const useFilters = create<Filters>((set) => ({
  currency: 'RUB',
  stops: [
    { id: 1, name: 'Все', value: 'all' },
    { id: 2, name: 'без пересадок', value: 'noStop' },
    { id: 3, name: '1 пересадка', value: '1stop' },
    { id: 4, name: '2 пересадки', value: '2stops' },
    { id: 5, name: '3 пересадки', value: '3stops' },
  ],
  selectedStops: ['all'],
  changeCurrency: (state) => set(() => ({ currency: state })),
  toggleStop: (value) =>
    set((state) => {
      const isSelected = state.selectedStops.includes(value);
      return {
        selectedStops: isSelected
          ? state.selectedStops.filter((stop) => stop !== value)
          : [...state.selectedStops, value],
      };
    }),
}));
