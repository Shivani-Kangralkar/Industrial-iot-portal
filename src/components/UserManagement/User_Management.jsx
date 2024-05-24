import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { close } from "../../redux-store/ToggleSlice";
import { Button,Box ,Typography} from "@mui/material";

const User_Management = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(close());
  }, []);

  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: '10%', py:2 }}
        >
           <Typography
                sx={{ textAlign: "center", fontSize: "15px"}}
              >
              CREATE USERS
              </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default User_Management;
