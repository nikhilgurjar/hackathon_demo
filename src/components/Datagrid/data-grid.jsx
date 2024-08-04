import { useState } from "react";

import Box from "@mui/material/Box";
import {
  DataGrid,
  gridClasses,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";

import { EmptyContent } from "src/components/empty-content";

const HIDE_COLUMNS = { id: false };

const HIDE_COLUMNS_TOGGLABLE = ["id"];

// ----------------------------------------------------------------------

export function DataGridCustom({ data: rows, column_names: columns }) {
  const [filterButtonEl, setFilterButtonEl] = useState(null);
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState(HIDE_COLUMNS);

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  console.info(getTogglableColumns());

  return (
    <DataGrid
      disableRowSelectionOnClick
      rows={rows}
      columns={columns}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={(newModel) =>
        setColumnVisibilityModel(newModel)
      }
      //   autoPageSize
      pageSizeOptions={[5, 10, 25]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 25, page: 0 },
        },
      }}
      slots={{
        toolbar: CustomToolbar,
        noRowsOverlay: () => <EmptyContent />,
        noResultsOverlay: () => <EmptyContent title="No results found" />,
      }}
      slotProps={{
        panel: { anchorEl: filterButtonEl },
        toolbar: { setFilterButtonEl, showQuickFilter: true },
        columnsManagement: { getTogglableColumns },
      }}
      sx={{
        [`& .${gridClasses.cell}`]: {
          alignItems: "center",
          display: "inline-flex",
        },
      }}
    />
  );
}

function CustomToolbar({ setFilterButtonEl }) {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton ref={setFilterButtonEl} />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
