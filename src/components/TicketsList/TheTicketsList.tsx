'use client';
import { tickets } from '@/data/tickets.json';
import TheTicket from '../Ticket/TheTicket';
import { useFilters } from '../../../store/useFilters';

function TheTicketsList() {
  const { selectedStops } = useFilters();
  console.log(selectedStops);

  const filteredStops: (0 | 1 | 2 | 3 | null)[] | null = selectedStops.includes('all')
    ? null
    : selectedStops.map((stop) => {
        switch (stop) {
          case 'noStop':
            return 0;
          case '1stop':
            return 1;
          case '2stops':
            return 2;
          case '3stops':
            return 3;
          default:
            return null;
        }
      });
  console.log(filteredStops);

  const filteredTickets = tickets
    .filter((ticket) => (filteredStops ? filteredStops.includes(ticket.stops as 0) : true))
    .sort((a, b) => a.price - b.price);

  return (
    <div className="grid w-full gap-4">
      {filteredTickets.map((ticket, index) => (
        <div key={index}>
          <TheTicket ticket={ticket} />
        </div>
      ))}
    </div>
  );
}

export default TheTicketsList;
