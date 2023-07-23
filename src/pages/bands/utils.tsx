import { CookieValueTypes } from "cookies-next";

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

export const prepareSpotifyRequestParams = (
  spotifyAccessToken: CookieValueTypes
) => ({
  headers: {
    Authorization: `Bearer  ${spotifyAccessToken}`,
  },
});
