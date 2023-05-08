import { secrets } from "../../../creds";

export const getArtistData = async (spotifyAccessToken: string) => {
  const result = await fetch(
    "https://api.spotify.com/v1/artists/16AVsBqzmIZTNHd0eX8VbK",
    {
      headers: {
        Authorization: `Bearer  ${spotifyAccessToken}`,
      },
    }
  );
  const response = await result.json();
  return await response;
};
