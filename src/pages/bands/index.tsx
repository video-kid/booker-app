import { getCookie } from "cookies-next";
import useSWR, { Fetcher } from "swr";
import * as Table from "../../components/Table/Table";

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
        <Table.Wrapper>
          <Table.Header>
            <Table.Row>
              <Table.Heading>name</Table.Heading>
              <Table.Heading>genres</Table.Heading>
              <Table.Heading>id</Table.Heading>
              <Table.Heading>popularity</Table.Heading>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data ? (
              <Table.Row>
                <Table.Record>{data?.name}</Table.Record>
                <Table.Record>{data?.genres}</Table.Record>
                <Table.Record>{data?.id}</Table.Record>
                <Table.Record>{data?.popularity}</Table.Record>
              </Table.Row>
            ) : (
              <Table.Row>
                <Table.Record span={3}>no data</Table.Record>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Wrapper>
      ) : (
        <>err</>
      )}
    </section>
  );
};

export default Bands;
