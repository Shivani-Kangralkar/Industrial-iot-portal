import React, { useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable, MRT_GlobalFilterTextField, } from "material-react-table";
import { Box, lighten, Button, Checkbox, Typography ,  Menu, MenuItem } from "@mui/material";
import { info } from "../../constants/info";


const Example = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the anchor element for the dropdown menu

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const columns = useMemo(
    () => [
      {
        accessorKey: "select",
        header: "Select",
        Cell: ({ row }) => (
          <Checkbox
            checked={row.isSelected}
            onChange={() => row.toggleRowSelected()}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 24 }, "&.Mui-checked": { color: "#bbdefb"} }}
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
        size: 300,
        Cell: ({ row }) => {
          console.log("sss", row)
          if (!row.original.group || !Array.isArray(row.original.group)) {
            console.log("Group Items:"); // Log message when group is undefined or not an array
            return null;
          }
      
          // Mapping of group names to colors
          const groupColorMap = {
            "Group 2": "#a5d6a7",
            "Group 4": "#90caf9",
            "Group 5": "#d1c4e9"
            // Add more mappings as needed
          };
      
          return (
            <div>
              {row.original.group.map((item, index) => {
                const groupName = Object.values(item)[0];
                const backgroundColor = groupColorMap[groupName] || 'black'; // Default color if not found in map
                const color = 'black'
                return (
                  <React.Fragment key={index}>
                    <Button style={{ color: color , backgroundColor: backgroundColor}}>
                      {groupName}
                    </Button>
                    {index !== row.original.group.length - 1 && ' '}
                  </React.Fragment>
                );
              })}
            </div>
          );
        }
      }
      
    ],
    []
  );

  const tableData = useMemo(() => {
    if (Array.isArray(info) && info.length > 0) {
      return info;
    }
    return [];
  }, [info]);

  const handleAction1 = () => {
    // Handle action 1
    console.log("Action 1 clicked");
  };

  const handleAction2 = () => {
    // Handle action 2
    console.log("Action 2 clicked");
  };

  const table = useMaterialReactTable({
    columns,
    data: tableData,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: false,
    enableRowSelection: false,
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
          alignItems: "center",
        })}
      >

        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <MRT_GlobalFilterTextField table={table} />
          <Button variant="contained" color="primary" >
          <Typography
                sx={{ textAlign: "center", fontSize: "12px"}}
              >
              Create User
            </Typography>
          </Button>

          <Button variant="contained" sx={{backgroundColor:"#bbdefb", color: "black"}}>
          <Typography
          variant="subtitle2"
                sx={{ textAlign: "center", fontSize: "12px"}}
              >
              Add to Group
            </Typography>
            
          </Button>




          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleAction1}>Action 1</MenuItem>
            <MenuItem onClick={handleAction2}>Action 2</MenuItem>
          </Menu>
        </Box>

        <Button onClick={handleMenuOpen} variant="contained" sx={{backgroundColor:"#e3f2fd", color: "black",}}>
          <Typography
          variant="subtitle2"
                sx={{ textAlign: "center", fontSize: "12px"}}
              >
              Actions
            </Typography>
            
          </Button>

      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
