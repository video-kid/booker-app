import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

type Artist = {
  genres: Array<string>;
  id: string;
  name: string;
  popularity: number;
};

export const Bands = () => {
  const spotifyAccessToken = getCookie("spotify_token");
  const [artist, setArtist] = useState<Artist | null>(null);

  const getArtistData = async (spotifyAccessToken: string) => {
    const result = await fetch(
      "https://api.spotify.com/v1/artists/16AVsBqzmIZTNHd0eX8VbK",
      {
        headers: {
          Authorization: `Bearer  ${spotifyAccessToken}`,
        },
      }
    );
    const response = await result.json();
    return await setArtist(response);
  };

  useEffect(() => {
    getArtistData(spotifyAccessToken as string);
  }, [spotifyAccessToken]);

  if (!artist) return;
  return (
    <section>
      <h1>bands</h1>
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
          <tr>
            <td>{artist.name}</td>
            <td>{artist.genres}</td>
            <td>{artist.id}</td>
            <td>{artist.popularity}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Bands;
