import { Fetcher } from "swr";
import { FetcherResponse } from "swr/_internal";

type useFetcherOutput<T> = {
  fetcher: Fetcher<T>;
};

const useFetcher = <T extends {}>(init?: RequestInit): useFetcherOutput<T> => {
  const fetcher: Fetcher<T> = (url: RequestInfo | URL) =>
    fetch(url, init).then((res) => res.json());
  return { fetcher: fetcher };
};

export { useFetcher };
