import { SongkickEventObject } from "@/types/events/events";
import useSWR, { Fetcher } from "swr";

export const Events = () => {
  const fetcher: Fetcher<Array<SongkickEventObject>> = (
    url: RequestInfo | URL
  ) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR<Array<SongkickEventObject>>(
    "api/events",
    fetcher
  );

  return (
    <section>
      <h1>events</h1>
      {isLoading ? (
        <>Loading...</>
      ) : !error ? (
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>date</td>
              <td>venue</td>
            </tr>
          </thead>
          <tbody>
            {data?.length ? (
              data?.map(({ displayName, start, venue }) => (
                <tr key={displayName}>
                  <td>{displayName}</td>
                  <td>{start.date}</td>
                  <td>{venue.displayName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>no data</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <>error</>
      )}
    </section>
  );
};

export default Events;
