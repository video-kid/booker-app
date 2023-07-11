import { getCookie } from "cookies-next";
import useSWR, { Fetcher } from "swr";
import * as Table from "../../components/Table/Table";
import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { useFetcher } from "@/hooks/useFetcher/useFetcher";

type Artist = {
  genres: Array<string>;
  id: string;
  name: string;
  popularity: number;
};

const Bands = () => {
  const spotifyAccessToken = getCookie("spotify_token");
  const spotifyRequestParams = {
    headers: {
      Authorization: `Bearer  ${spotifyAccessToken}`,
    },
  };

  const { fetcher } = useFetcher<Artist>(spotifyRequestParams);

  const { data, error, isLoading } = useSWR<Artist>(
    "https://api.spotify.com/v1/artists/16AVsBqzmIZTNHd0eX8VbK",
    fetcher
  );

  return (
    <Section>
      <Navbar>
        <Heading>bands</Heading>
      </Navbar>
      {!spotifyAccessToken || isLoading ? (
        <>Loading...</>
      ) : !error ? (
        <Table.Wrapper>
          <Table.Header>
            <Table.Heading>name</Table.Heading>
            <Table.Heading>genres</Table.Heading>
            <Table.Heading>id</Table.Heading>
            <Table.Heading>popularity</Table.Heading>
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
    </Section>
  );
};

export default Bands;
