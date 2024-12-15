import TheFilters from '@/components/Filters/TheFilters';
import TheTicketsList from '@/components/TicketsList/TheTicketsList';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between gap-4">
        <TheFilters />
        <TheTicketsList />
      </div>
    </div>
  );
}
