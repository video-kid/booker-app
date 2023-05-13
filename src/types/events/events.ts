export type SongkickEventType = "Concert" | "Festival";
export type SongkickEventStatus = "ok" | "cancelled" | "postponed";
export type SongkickPerformanceBilling = "headline" | "support";

export type SongkickArtistObject = {
  uri: string;
  displayName: string;
  id: number;
  identifier: Array<number>;
  onTourUntil?: string;
};

export type SongkickPerformanceObject = {
  artist: SongkickArtistObject;
  id: number;
  displayName: string;
  billingIndex: number;
  billing: SongkickPerformanceBilling;
};

export type SongkickVenueObject = {
  id: number;
  displayName: string;
  uri: string;
  lng: number;
  lat: number;
  metroArea: SongkickMetroAreaObject;
};

export type DisplayNameObject = {
  displayName: string;
};

export type SongkickMetroAreaObject = {
  uri: string;
  displayName: string;
  country: DisplayNameObject;
  id: number;
  state: DisplayNameObject;
};

export type SongkickEventObject = {
  id: number;
  type: SongkickEventType;
  uri: string;
  displayName: string;
  start: SongkickEventStart;
  performance: Array<SongkickPerformanceObject>;
  location: SongkickLocationObject;
  venue: SongkickVenueObject;
  status: SongkickEventStatus;
  popularity: number;
};

export type SongkickEventStart = {
  time: string;
  date: string;
  datetime: string;
};

export type SongkickLocationObject = {
  city: string;
  lng: number;
  lat: number;
};
