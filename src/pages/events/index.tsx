import { SongkickEventObject } from "@/types/events/events";
import { useEffect, useState } from "react";

export const Events = () => {
  const [events, setEvents] = useState<undefined | Array<SongkickEventObject>>(
    undefined
  );

  useEffect(() => {
    const getEventsList = async () => {
      const result = await fetch("http://localhost:3000/api/events");
      const response = await result.json();
      setEvents(response);
    };
    getEventsList();
  }, []);

  return (
    <section>
      <h1>events</h1>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>date</td>
            <td>venue</td>
          </tr>
        </thead>
        <tbody>
          {events?.map(({ displayName, start, venue }) => (
            <tr key={displayName}>
              <td>{displayName}</td>
              <td>{start.date}</td>
              <td>{venue.displayName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Events;
