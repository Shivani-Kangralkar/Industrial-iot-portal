import * as React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};





function SuccessModal({ successModal, setSuccessModal }) {
  const handleClose = () => setSuccessModal(false);

  return (
    <div>
      <Modal
        open={successModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 100, color: "#0080FF" }} />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#0080FF",
                fontWeight: "bold",
                fontSize: "25px",
                mt: 2,
              }}
            >
              Successful
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: "black", textAlign: "center" }}
            >
              You have successfully added <br /> user to the IoT Portal
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default SuccessModal;
