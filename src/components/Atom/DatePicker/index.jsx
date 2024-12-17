"use client";
import React, { useState } from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, InputAdornment } from "@mui/material";
import Image from "next/image";
import moment from "moment";

export const DatePicker = ({
  label,
  name,
  value,
  handleChange,
  icon,
  disabled,
  error,
  helperText,
  onBlur,
}) => {
  const formatToLocalISOStringWithZ = (date) => {
    if (!date) return null;
    const localDate = moment(date).toDate();
    return new Date(
      localDate.getTime() - localDate.getTimezoneOffset() * 60000
    ).toISOString();
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="inputLabel">
        {label} <span style={{ color: "red" }}>*</span>
      </div>

      <MuiDatePicker
        // value={value ? moment(value) : null}
        // onChange={(newTime) =>
        //   handleChange({ target: { name, value: newTime?.toISOString() } })
        // }
        onChange={(newValue) => {
          handleChange({
            target: {
              name,
              value: formatToLocalISOStringWithZ(newValue?.toDate()), // Convert to local ISO format with Z
              type: "date",
            },
          });
        }}
        value={value ? moment(value) : null}
        disabled={disabled}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: "outlined",
            onBlur: onBlur,
            error: error,
            helperText: helperText,
            InputProps: {
              startAdornment: icon && (
                <InputAdornment position="start">
                  <Image src={icon} alt="icon" height={40} width={40} />
                </InputAdornment>
              ),
              sx: {
                height: "80px",
                borderRadius: "20px",
                fontSize: "18px",
              },
            },
            sx: {
              "& .MuiInputBase-root": {
                backgroundColor: "white",
                borderRadius: "20px",
                fontSize: "20px",
                color: "#140446 !important",
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
            },
          },
        }}
      />
    </div>
  );
};

export default DatePicker;
