"use client";
import React from "react";
import { SnackbarProvider } from "notistack";
import Toaster from "@/components/Atom/Toaster";

const Snackbar = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={5}
      hideIconVariant
      preventDuplicate
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      iconVariant={{
        success: "✅",
        error: "✖️",
        warning: "⚠️",
        info: "ℹ️",
      }}>
      <Toaster />
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;
