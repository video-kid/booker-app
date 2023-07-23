import { SongkickEventObject } from "@/types/events/events";
import Table, { TableConfigType } from "@/components/Table/Table";

const EventsTable = ({
  events,
}: {
  events: Array<SongkickEventObject> | undefined;
}) => {
  const tableConfig: TableConfigType<SongkickEventObject> = {
    content: [
      {
        header: "name",
        content: (data) => <>{data.displayName}</>,
      },
      {
        header: "data",
        content: (data) => <>{data.start.date}</>,
      },
      {
        header: "venue",
        content: (data) => <>{data.venue.displayName}</>,
      },
    ],
  };

  return <Table config={tableConfig} data={events} />;
};

export default EventsTable;
