import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../../redux-store/ToggleSlice";
import { Button, Box, Typography } from "@mui/material";
import CreateUser from "../popUp/CreateUser";
import SuccessModal from "../popUp/SuccessModal";

const User_Management = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    dispatch(close());
  }, []);

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        sx={{
          fontWeight: "bold",
          my: 3,
          fontSize: "25px",
          mt: 4,
          pt: 2,
          ml: 2,
        }}
      >
        User Management
      </Typography>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          NO USERS CREATED
        </Typography>
        <img
          src="/images/img1.jpg"
          alt="Centered Image"
          style={{
            maxWidth: "40%",
            maxHeight: "40%",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1, mb: 2, width: "10%", py: 2 }}
          onClick={() => setModal(true)}
        >
          <Typography sx={{ textAlign: "center", fontSize: "15px" }}>
            CREATE USERS
          </Typography>
        </Button>
      </Box>

      {modal && <CreateUser setModal={setModal} modal={modal} setSuccessModal={setSuccessModal} />}

      {successModal && (
        <SuccessModal successModal={successModal} setSuccessModal={setSuccessModal} />
      )}
    </Box>
  );
};

export default User_Management;
