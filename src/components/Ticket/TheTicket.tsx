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
function TheTicket({ ticket }: TheTicketProps) {
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
    <div className="flex gap-4 p-4 bg-zinc-600 rounded-lg">
      <div className="grid ">
        <div>{carrier}</div>
        <div>
          <button
            className="bg-orange-600 rounded-lg
          p-4">
            Купить за {price}
          </button>
        </div>
      </div>
      <div className="flex flex-auto justify-between">
        <div className="grid gap-4 basis-1/5">
          <div>{departure_time}</div>
          <div>
            {origin}, {origin_name}
          </div>
          <div>{departure_date}</div>
        </div>
        <div>{purl(stops)}</div>
        <div className="grid gap-4 basis-1/5">
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
