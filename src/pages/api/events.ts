import { SongkickEventObject } from "@/types/events/events";
import type { NextApiRequest, NextApiResponse } from "next";

const eventsList: Array<SongkickEventObject> = [
  {
    id: 11129128,
    type: "Concert",
    uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
    displayName: "Wild Flag at The Fillmore (April 18, 2023)a",
    start: {
      time: "20:00:00",
      date: "2023-05-18",
      datetime: "2023-05-18T20:00:00-0800",
    },
    performance: [
      {
        artist: {
          uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag",
          id: 29835,
          identifier: [],
        },
        id: 21579303,
        displayName: "Wild Flag",
        billingIndex: 1,
        billing: "headline",
      },
    ],
    location: {
      city: "San Francisco, CA, US",
      lng: -122.4332937,
      lat: 37.7842398,
    },
    venue: {
      id: 6239,
      displayName: "The Fillmore",
      uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
      lng: -122.4332937,
      lat: 37.7842398,
      metroArea: {
        uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
        displayName: "SF Bay Area",
        country: { displayName: "US" },
        id: 26330,
        state: { displayName: "CA" },
      },
    },
    status: "ok",
    popularity: 0.012763,
  },
  {
    id: 11129128,
    type: "Concert",
    uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
    displayName: "Wild Flag at The Fillmore (April 18, 2023)b",
    start: {
      time: "20:00:00",
      date: "2023-05-18",
      datetime: "2023-05-18T20:00:00-0800",
    },
    performance: [
      {
        artist: {
          uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag",
          id: 29835,
          identifier: [],
        },
        id: 21579303,
        displayName: "Wild Flag",
        billingIndex: 1,
        billing: "headline",
      },
    ],
    location: {
      city: "San Francisco, CA, US",
      lng: -122.4332937,
      lat: 37.7842398,
    },
    venue: {
      id: 6239,
      displayName: "The Fillmore",
      uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
      lng: -122.4332937,
      lat: 37.7842398,
      metroArea: {
        uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
        displayName: "SF Bay Area",
        country: { displayName: "US" },
        id: 26330,
        state: { displayName: "CA" },
      },
    },
    status: "ok",
    popularity: 0.012763,
  },
  {
    id: 11129128,
    type: "Concert",
    uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
    displayName: "Wild Flag at The Fillmore (April 18, 2023)bb",
    start: {
      time: "20:00:00",
      date: "2023-05-18",
      datetime: "2023-05-18T20:00:00-0800",
    },
    performance: [
      {
        artist: {
          uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag",
          id: 29835,
          identifier: [],
        },
        id: 21579303,
        displayName: "Wild Flag",
        billingIndex: 1,
        billing: "headline",
      },
    ],
    location: {
      city: "San Francisco, CA, US",
      lng: -122.4332937,
      lat: 37.7842398,
    },
    venue: {
      id: 6239,
      displayName: "The Fillmore",
      uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
      lng: -122.4332937,
      lat: 37.7842398,
      metroArea: {
        uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
        displayName: "SF Bay Area",
        country: { displayName: "US" },
        id: 26330,
        state: { displayName: "CA" },
      },
    },
    status: "ok",
    popularity: 0.012763,
  },
  {
    id: 11129128,
    type: "Concert",
    uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
    displayName: "Wild Flag at The Fillmore (April 18,b 2023)",
    start: {
      time: "20:00:00",
      date: "2023-05-18",
      datetime: "2023-05-18T20:00:00-0800",
    },
    performance: [
      {
        artist: {
          uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag",
          id: 29835,
          identifier: [],
        },
        id: 21579303,
        displayName: "Wild Flag",
        billingIndex: 1,
        billing: "headline",
      },
    ],
    location: {
      city: "San Francisco, CA, US",
      lng: -122.4332937,
      lat: 37.7842398,
    },
    venue: {
      id: 6239,
      displayName: "The Fillmorea",
      uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
      lng: -122.4332937,
      lat: 37.7842398,
      metroArea: {
        uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
        displayName: "SF Bay Area",
        country: { displayName: "US" },
        id: 26330,
        state: { displayName: "CA" },
      },
    },
    status: "ok",
    popularity: 0.012763,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<SongkickEventObject>>
) {
  res.status(200).json(eventsList);
}
