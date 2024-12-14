import { tickets } from '@/data/tickets.json';
import TheTicket from '../Ticket/TheTicket';
function TheTicketsList() {
  console.log(tickets);

  return (
    <div className="grid gap-4">
      {tickets
        .sort((ticket) => (ticket.price > 0 ? 1 : -1))
        .map((ticket, id) => (
          <div key={id}>
            <TheTicket ticket={ticket} />
          </div>
        ))}
    </div>
  );
}

export default TheTicketsList;
