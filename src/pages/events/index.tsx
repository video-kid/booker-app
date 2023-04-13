import { secrets } from "../../../creds";

export const getStaticProps = async () => {
  const getAccessToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${secrets.spotify.client_id}&client_secret=${secrets.spotify.client_secret}`,
    });
    const response = await result.json();
    return await response.access_token;
  };
  const spotifyAccessToken = await getAccessToken();

  const getArtistData = async () => {
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

  return {
    props: {
      artistData: await getArtistData(),
    },
  };
};

// {
//   "external_urls": {
//     "spotify": "https://open.spotify.com/artist/16AVsBqzmIZTNHd0eX8VbK"
//   },
//   "followers": {
//     "href": null,
//     "total": 200334
//   },
//   "genres": [
//     "canadian rock",
//     "dark cabaret",
//     "industrial metal",
//     "pixie",
//     "steampunk"
//   ],
//   "href": "https://api.spotify.com/v1/artists/16AVsBqzmIZTNHd0eX8VbK",
//   "id": "16AVsBqzmIZTNHd0eX8VbK",
//   "images": [
//     {
//       "height": 640,
//       "url": "https://i.scdn.co/image/ab6761610000e5eb916d2275e3b91d069e6e7683",
//       "width": 640
//     },
//     {
//       "height": 320,
//       "url": "https://i.scdn.co/image/ab67616100005174916d2275e3b91d069e6e7683",
//       "width": 320
//     },
//     {
//       "height": 160,
//       "url": "https://i.scdn.co/image/ab6761610000f178916d2275e3b91d069e6e7683",
//       "width": 160
//     }
//   ],
//   "name": "The Birthday Massacre",
//   "popularity": 49,
//   "type": "artist",
//   "uri": "spotify:artist:16AVsBqzmIZTNHd0eX8VbK"
// }

export const Events = ({ artistData }) => {
  return (
    <section>
      <h1>events</h1>
      <table>
        <tbody>
          <tr>
            <td>{console.log(artistData)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Events;
