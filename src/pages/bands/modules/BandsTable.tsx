import Table, { TableConfigType } from "@/components/Table/Table";
import { Artist } from "@/types/artists/artists";

const BandsTable = ({ artists }: { artists?: Array<Artist> }) => {
  const tableConfig: TableConfigType<Artist> = {
    content: [
      {
        header: "name",
        content: (data) => <>{data.name}</>,
      },
      {
        header: "genres",
        content: (data) => <>{data.genres}</>,
      },
      {
        header: "id",
        content: (data) => <>{data.id}</>,
      },
      {
        header: "popularity",
        content: (data) => <>{data.popularity}</>,
      },
    ],
  };

  return <Table config={tableConfig} data={artists} />;
};

export { BandsTable };
