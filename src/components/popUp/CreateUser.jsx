import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  IconButton,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: "auto",
  maxHeight: "90vh",
  bgcolor: "#e3f2fd",
  boxShadow: 24,
  p: 4,
  border: "1px solid white",
};

const style2 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "white",
  position: "relative",
  border: "2px solid white",
  width: "100%",
};

const CreateUser = ({ modal, setModal, setSuccessModal }) => {
  const handleClose = () => setModal(false);
  const initialFormData = {
    name: "",
    email: "",
    employeeId: "",
    password: "",
    reenterPassword: "",
    username: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialFormData);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (event) => {
    setFormData({
      ...formData,
      role: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    setSuccessModal(true);
    setModal(false)
  };

  return (
    <>
      {modal && (
        <Modal
          open={modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style1}>
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

            <Box sx={style2}>
              <Typography sx={{ fontWeight: "bold", my: 2, fontSize: "18px" }}>
                Create New User
              </Typography>
              <Avatar
                src="/broken-image.jpg"
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                }}
              />

              <Box component="form" onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 6,
                    mt: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Enter Name
                    </Typography>
                    <TextField
                      margin="normal"
                      required
                      id="name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ width: "30ch" }}
                      size="small"
                      InputProps={{
                        sx: {
                          height: "30px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                          },
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Enter Username
                    </Typography>
                    <TextField
                      margin="normal"
                      required
                      id="username"
                      name="username"
                      autoComplete="username"
                      value={formData.username}
                      onChange={handleChange}
                      sx={{ width: "30ch" }}
                      size="small"
                      InputProps={{
                        sx: {
                          height: "30px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Enter E-Mail ID
                    </Typography>
                    <TextField
                      margin="normal"
                      required
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ width: "30ch" }}
                      size="small"
                      InputProps={{
                        sx: {
                          height: "30px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                            padding: "8px",
                          },
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ mt: 1, width: "12ch", mx: "auto", ml: 4 }}>
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "12px", mb: 1 }}
                    >
                      Select Role
                    </Typography>
                    <FormControl fullWidth sx={{ bgcolor: "#e3f2fd" }}>
                      <InputLabel
                        id="role-select-label"
                        sx={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          top: "-10px",
                          color: "black",
                        }}
                      >
                        Select Role
                      </InputLabel>
                      <Select
                        labelId="role-select-label"
                        id="role-select"
                        value={formData.role}
                        label="Select Role"
                        onChange={handleRoleChange}
                        IconComponent={ArrowDropDownIcon}
                        sx={{
                          height: "25px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                            padding: "8px",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="editor">Editor</MenuItem>
                        <MenuItem value="viewer">Viewer</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box sx={{ mt: 1, width: "15ch", mx: "auto" }}>
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "12px", mb: 1 }}
                    >
                      Select Group
                    </Typography>
                    <FormControl fullWidth sx={{ bgcolor: "#e3f2fd" }}>
                      <InputLabel
                        id="role-select-label"
                        sx={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          top: "-10px",
                          color: "black",
                        }}
                      >
                        Select Group
                      </InputLabel>
                      <Select
                        labelId="role-select-label"
                        id="group-select"
                        value={formData.role}
                        label="Select Group"
                        onChange={handleRoleChange}
                        IconComponent={ArrowDropDownIcon}
                        sx={{
                          height: "25px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                            padding: "8px",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="admin">Group 1</MenuItem>
                        <MenuItem value="editor">Group 2</MenuItem>
                        <MenuItem value="viewer">Group 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                    Employee ID
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    id="employeeId"
                    name="employeeId"
                    autoComplete="employee-id"
                    value={formData.employeeId}
                    onChange={handleChange}
                    sx={{ width: "30ch" }}
                    size="small"
                    InputProps={{
                      sx: {
                        height: "30px",
                        "& .MuiInputBase-input": {
                          height: "10px",
                          padding: "8px",
                        },
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 6,
                    mt: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Enter Password
                    </Typography>
                    <TextField
                      margin="normal"
                      required
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleChange}
                      sx={{ width: "30ch" }}
                      size="small"
                      InputProps={{
                        sx: {
                          height: "30px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                            padding: "8px",
                          },
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Re-Enter Password
                    </Typography>
                    <TextField
                      margin="normal"
                      required
                      id="reenterPassword"
                      name="reenterPassword"
                      type="password"
                      autoComplete="new-password"
                      value={formData.reenterPassword}
                      onChange={handleChange}
                      sx={{ width: "30ch" }}
                      size="small"
                      InputProps={{
                        sx: {
                          height: "30px",
                          "& .MuiInputBase-input": {
                            height: "10px",
                            padding: "8px",
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 4,
                      py: 1,
                      width: "30%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Submit</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CreateUser;
