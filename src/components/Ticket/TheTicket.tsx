'use client';
import { useFilters } from '../../../store/useFilters';

interface TheTicketProps {
  ticket: {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
  };
}
function purl(stops: number) {
  if (stops === 1) {
    return `${1} пересадка`;
  } else if (stops > 1 && stops < 5) {
    return `${stops} пересадки`;
  }
  return `Без пересадок`;
}
function converterPrice(price: number, currency: string) {
  switch (currency) {
    case 'USD':
      return Math.ceil(price / 103);
    case 'EUR':
      return Math.ceil(price / 109);
    default:
      return price;
  }
}
function TheTicket({ ticket }: TheTicketProps) {
  const { currency } = useFilters();
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price,
  } = ticket;

  return (
    <div className="flex gap-4 p-4 bg-zinc-600 rounded-lg text-white">
      <div className="grid w-1/5 ">
        <div>{carrier}</div>
        <div>
          <button
            className="bg-yellow-500 rounded-lg
          px-4 py-2 grid w-full">
            Купить
            <span>
              за {converterPrice(price, currency)} {currency}
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-auto justify-between">
        <div className="grid gap-4 basis-1/4">
          <div>{departure_time}</div>
          <div>
            {origin}, {origin_name}
          </div>
          <div>{departure_date}</div>
        </div>
        <div>{purl(stops)}</div>
        <div className="grid gap-4 basis-1/4">
          <div>{arrival_time}</div>
          <div>
            {destination}, {destination_name}
          </div>
          <div>{arrival_date}</div>
        </div>
      </div>
    </div>
  );
}

export default TheTicket;
