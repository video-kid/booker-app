import { SongkickEventObject } from "@/types/events/events";
import useSWR from "swr";
import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { useFetcher } from "@/hooks/useFetcher/useFetcher";
import { EventsTable } from "./modules/EventsTable";

const Events = () => {
  const fetcher = useFetcher<Array<SongkickEventObject>>();
  const { data, error, isLoading } = useSWR<Array<SongkickEventObject>>(
    "api/events",
    fetcher
  );

  return (
    <Section>
      <Navbar>
        <Heading>events</Heading>
      </Navbar>

      {isLoading ? (
        <>Loading...</>
      ) : !error ? (
        <EventsTable events={data} />
      ) : (
        <>error</>
      )}
    </Section>
  );
};

export default Events;
