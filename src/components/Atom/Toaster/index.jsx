"use client";

import ToasterService from "@/utils/toaster.util";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

const Toaster = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const success = (msg) =>
      msg && enqueueSnackbar(msg, { variant: "success" });

    const error = (msg) => msg && enqueueSnackbar(msg, { variant: "error" });

    ToasterService.subscribe(success, error);
  }, [enqueueSnackbar]);

  return null;
};

export default Toaster;
