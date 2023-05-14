import { getCookie } from "cookies-next";
import useSWR, { Fetcher } from "swr";

type Artist = {
  genres: Array<string>;
  id: string;
  name: string;
  popularity: number;
};

export const Bands = () => {
  const spotifyAccessToken = getCookie("spotify_token");

  const fetcher: Fetcher<Artist> = (url: RequestInfo | URL) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer  ${spotifyAccessToken}`,
      },
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR<Artist>(
    "https://api.spotify.com/v1/artists/16AVsBqzmIZTNHd0eX8VbK",
    fetcher
  );

  return (
    <section>
      <h1>bands</h1>
      {!spotifyAccessToken || isLoading ? (
        <>Loading...</>
      ) : !error ? (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>genres</th>
              <th>id</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              <tr>
                <td>{data?.name}</td>
                <td>{data?.genres}</td>
                <td>{data?.id}</td>
                <td>{data?.popularity}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={3}>no data</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <>err</>
      )}
    </section>
  );
};

export default Bands;
