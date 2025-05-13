import { Snackbar, Alert as MuiAlert } from "@mui/material";
import React from "react";

interface AlertProps {
  open: boolean;
  message: string;
  severity: "success" | "error";
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  open,
  message,
  severity,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
