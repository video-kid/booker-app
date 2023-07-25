import { getCookie } from "cookies-next";
import useSWR from "swr";
import * as Table from "../../components/Table/TablePart";
import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { useFetcher } from "@/hooks/useFetcher/useFetcher";
import { prepareSpotifyRequestParams } from "./utils";
import { Artist } from "@/types/artists/artists";
import { BandsTable } from "./modules/BandsTable";

const Bands = () => {
  const spotifyAccessToken = getCookie("spotify_token");

  const fetcher = useFetcher<Artist>(
    prepareSpotifyRequestParams(spotifyAccessToken)
  );

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
      ) : !error && data ? (
        <BandsTable artists={[data]} />
      ) : (
        <>err</>
      )}
    </Section>
  );
};

export default Bands;
