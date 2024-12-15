import { tickets } from '@/data/tickets.json';
import TheTicket from '../Ticket/TheTicket';

function TheTicketsList() {
  console.log(tickets);

  return (
    <div className="grid w-full gap-4">
      {tickets
        .sort((a, b) => a.price - b.price)
        .map((ticket, id) => (
          <div key={id}>
            <TheTicket ticket={ticket} />
          </div>
        ))}
    </div>
  );
}

export default TheTicketsList;
