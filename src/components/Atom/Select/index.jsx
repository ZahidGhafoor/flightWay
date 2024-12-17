"use client";
import React, { useEffect, useState } from "react";
import { Select as MuiSelect, MenuItem, InputAdornment } from "@mui/material";
import Image from "next/image";

export const Select = ({
  value,
  options,
  name,
  label,
  icon,
  handleSelect,
  disabled,
  placeholder,
  onBlur,
  error,
}) => {
  const [localValue, setLocalValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const selectChange = (event) => {
    const newValue = event.target.value;
    setLocalValue(newValue);
    handleSelect(name, newValue);
  };

  const handleBlur = (e) => {
    setIsTouched(true);
    if (onBlur) onBlur(e);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="inputLabel">
        {label} <span style={{ color: "red" }}>*</span>
      </div>

      <MuiSelect
        fullWidth
        value={localValue}
        placeholder={placeholder}
        onChange={selectChange}
        onBlur={handleBlur}
        name={name}
        disabled={disabled}
        startAdornment={
          icon && (
            <InputAdornment position="start">
              <Image src={icon} alt="icon" height={40} width={40} />
            </InputAdornment>
          )
        }
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 400,
              borderRadius: "12px",
            },
          },
        }}
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          width: "100%",
          height: "80px",
          fontSize: "20px",
          fontWeight: "400 !important",
          color: "#140446 !important",
          "& .MuiSelect-select": {
            padding: "20px",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000 !important",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000 !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000 !important",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F32013 !important",
          },
          "& .MuiFormHelperText-root.Mui-error": {
            color: "#F32013 !important",
          },
        }}>
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
};

export default Select;
