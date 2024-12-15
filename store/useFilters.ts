import { create } from 'zustand';
interface Filters {
  currency: string;
  changeCurrency: (state: string) => void;
}
export const useFilters = create<Filters>((set) => ({
  currency: 'RUB',
  changeCurrency: (state) => set(() => ({ currency: state })),
}));
