import React from "react";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import Image from "next/image";

function Input({
  icon,
  type,
  helperText = "",
  startAdornment,
  placeholder = "",
  label,
  name,
  handleChange,
  value,
  InputProps,
  button,
  onFocus,
  onBlur,
  error,
  ...rest
}) {
  return (
    <div style={{ width: "100%" }}>
      <div className="inputLabel">
        {label} <span style={{ color: "red" }}>*</span>
      </div>

      <TextField
        id="full-name"
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={value}
        name={name}
        onChange={handleChange}
        {...rest}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src={icon} alt="FlightWay Logo" height={40} width={40} />
            </InputAdornment>
          ),
          sx: {
            height: "80px",
            borderRadius: "12px",
            fontSize: "18px",
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            borderRadius: "20px",
            outline: "none",
            fontSize: "20px",
            fontWeight: "400 !important",
            color: "#140446 !important",
          },
          "& .MuiInputLabel-root": {
            color: "#000",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#EE5ED4",
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: "#F32013 !important",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1px solid #000 !important",
            },
            "&:hover fieldset": {
              border: "1px solid #000 !important",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #000 !important",
            },
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#EE5ED4 !important",
          },
          "& .MuiFormHelperText-root.Mui-error": {
            color: "#F32013 !important",
          },
        }}
      />
    </div>
  );
}

export default Input;
