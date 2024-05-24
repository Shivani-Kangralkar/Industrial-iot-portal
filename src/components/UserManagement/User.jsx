import React, { useMemo } from "react";

// MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";

// Material UI Imports
import { Box, lighten , Checkbox, TableHead  } from "@mui/material";

// Mock Data
import { info } from "../../constants/info";

const Example = () => {
  console.log("Info", info);

  const columns = useMemo(
    () => [
      {
        accessorKey: "select",
        header: "Select",
        Cell: ({ row }) => (
          <Checkbox
            checked={row.isSelected}
            onChange={() => row.toggleRowSelected()}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 24 }, "&.Mui-checked": { color: "light" } }}
          />
        ),
        size: 50,
      },
      {
        accessorFn: (row) => `${row.name}`,
        id: "name",
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt="avatar"
              height={30}
              src={row.original.avatar}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        accessorKey: "username",
        header: "User Name",
        size: 150,
      },
      {
        accessorKey: "employee_id",
        header: "Employee ID",
        size: 150,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "E-Mail",
        size: 250,
      },
      {
        accessorKey: "group",
        header: "Group",
        size: 150,
      },
    ],
    []
  );

  const tableData = useMemo(() => {
    if (Array.isArray(info) && info.length > 0) {
      return info;
    }
    return [];
  }, [info]);

  console.log("tableData", tableData);

  const table = useMaterialReactTable({
    columns,
    data: tableData, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: false, // Disable row actions
    enableRowSelection: false, // Disable row selection
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },

    renderTopToolbar: ({ table }) => (
      <Box
        sx={(theme) => ({
          backgroundColor: lighten(theme.palette.background.default, 0.05),
          display: "flex",
          gap: "0.5rem",
          p: "8px",
          justifyContent: "space-between",
        })}
      >
        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {/* import MRT sub-components */}
          <MRT_GlobalFilterTextField table={table} />
          <MRT_ToggleFiltersButton table={table} />
        </Box>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

const User = () => {
  return (
    <Box>
      <Example />
    </Box>
  );
};

export default User;
