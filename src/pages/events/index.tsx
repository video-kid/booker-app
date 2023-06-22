import { SongkickEventObject } from "@/types/events/events";
import useSWR, { Fetcher } from "swr";
import * as Table from "../../components/Table/Table";
import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";

const Events = () => {
  const fetcher: Fetcher<Array<SongkickEventObject>> = (
    url: RequestInfo | URL
  ) => fetch(url).then((res) => res.json());

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
        <Table.Wrapper>
          <Table.Header>
            <Table.Heading>name</Table.Heading>
            <Table.Heading>date</Table.Heading>
            <Table.Heading>venue</Table.Heading>
          </Table.Header>
          <Table.Body>
            {data?.length ? (
              data?.map(({ displayName, start, venue }) => (
                <Table.Row key={displayName}>
                  <Table.Record>{displayName}</Table.Record>
                  <Table.Record>{start.date}</Table.Record>
                  <Table.Record>{venue.displayName}</Table.Record>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Record span={3}>no data</Table.Record>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Wrapper>
      ) : (
        <>error</>
      )}
    </Section>
  );
};

export default Events;
