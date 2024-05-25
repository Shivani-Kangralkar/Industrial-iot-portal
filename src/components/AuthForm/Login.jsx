import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { FormControl } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate()

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', inputs);
    navigate(`/app`);
  };

  const isLoginDisabled = inputs.email === '' || inputs.password === '';

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundColor: "#3f51b5",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/img3.png"
          alt="Centered Image"
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h4"
            fontWeight="bold"
            sx={{ textAlign: "center" }}
          >
            Welcome to <br />
            Industrial IoT Portal
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.greyShades.grey1,
              fontSize: "0.750rem",
              textAlign: "center",
              fontWeight: 550,
              my: 3,
            }}
          >
            START AUTOMATING YOUR INDUSTRY
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "450px" }}
          >
            <Box sx={{ width: "100%", textAlign: "start" }}>
              <FormControl
                sx={{ width: "50ch" }}
                variant="outlined"
                size="small"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <EmailOutlinedIcon
                        sx={{ color: '#0080FF' }}
                      />
                      {inputs.email === "" && (
                        <Typography
                          sx={{
                            ml: 1,
                            fontSize: "12px",
                            color: theme.palette.greyShades.grey3,
                          }}
                        >
                          Enter user ID or E-mail
                        </Typography>
                      )}
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box sx={{ width: "100%", mt: 3, textAlign: "start" }}>
              <FormControl
                sx={{ width: "50ch" }}
                variant="outlined"
                size="small"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                  startAdornment={
                    <InputAdornment
                      position="start"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <LockOutlinedIcon
                        sx={{ color: theme.palette.primary.main }}
                      />
                      {inputs.password === "" && (
                        <Typography
                          sx={{
                            ml: 1,
                            fontSize: "12px",
                            color: theme.palette.greyShades.grey3,
                          }}
                        >
                          Enter Password
                        </Typography>
                      )}
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <RemoveRedEyeOutlinedIcon
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"
                        cursor="pointer"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </RemoveRedEyeOutlinedIcon>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography sx={{ fontSize: "0.90rem" }}>
                  Save Password
                </Typography>
              }
              sx={{ mt: "1px" }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1 }}
              disabled={isLoginDisabled}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
