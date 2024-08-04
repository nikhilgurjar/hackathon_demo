import React from "react";
import { Box, Card, CardHeader, Container } from "@mui/material";
import { DataGridCustom } from "./data-grid";

const dataSource = [
  {
    id: 1,
    Company_name: "O'Keefe, Streich and Crona",
    last_name: "wunderground.com",
    Revenue: 67076,
  },
  {
    id: 2,
    Company_name: "Gleichner-Doyle",
    last_name: "360.cn",
    Revenue: 76752,
  },
  { id: 3, Company_name: "Mills Group", last_name: "dot.gov", Revenue: 20302 },
  {
    id: 4,
    Company_name: "Bruen Group",
    last_name: "flickr.com",
    Revenue: 55400,
  },
  {
    id: 5,
    Company_name: "Funk-O'Hara",
    last_name: "rakuten.co.jp",
    Revenue: 45293,
  },
  {
    id: 6,
    Company_name: "Wiegand Inc",
    last_name: "seattletimes.com",
    Revenue: 28822,
  },
  {
    id: 7,
    Company_name: "Stoltenberg-Jacobi",
    last_name: "g.co",
    Revenue: 98062,
  },
  {
    id: 8,
    Company_name: "Gulgowski, Gibson and Zulauf",
    last_name: "booking.com",
    Revenue: 57744,
  },
  {
    id: 9,
    Company_name: "Sporer Inc",
    last_name: "sakura.ne.jp",
    Revenue: 42673,
  },
  {
    id: 10,
    Company_name: "Moore, Ankunding and D'Amore",
    last_name: "blogtalkradio.com",
    Revenue: 88434,
  },
  {
    id: 11,
    Company_name: "Moore, Ankunding and D'Amore",
    last_name: "blogtalkradio.com",
    Revenue: 88434,
  },
  {
    id: 12,
    Company_name: "Moore, Ankunding and D'Amore",
    last_name: "blogtalkradio.com",
    Revenue: 88434,
  },
  {
    id: 13,
    Company_name: "Moore, Ankunding and D'Amore",
    last_name: "blogtalkradio.com",
    Revenue: 88434,
  },
  {
    id: 14,
    Company_name: "Moore, Ankunding and D'Amore",
    last_name: "blogtalkradio.com",
    Revenue: 88434,
  },
];
const column_metadata = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "Company_name", headerName: "Company Name", flex: 1 },
  { field: "last_name", headerName: "Last Name", flex: 1 },
  { field: "Revenue", headerName: "Revenue", flex: 1 },
];
const DataGrid = () => {
  return (
    <Box
      sx={{
        py: 5,
        minHeight: 480,
        display: "flex",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Card sx={{ p: 2, width: 1 }}>
        <CardHeader title="Result Data" sx={{ mb: 2 }} />
        <Box sx={{ height: 480, width: 1 }}>
          <DataGridCustom data={dataSource} column_names={column_metadata} />
        </Box>
      </Card>
    </Box>
  );
};

export default DataGrid;
