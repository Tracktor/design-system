import { useContext } from "react";
import { SnackbarContext } from "@/context/Snackbar/SnackbarProvider";

/**
 * Hook to handle the snackbar
 */
const useSnackBar = () => {
  const context = useContext(SnackbarContext);
  const { open, closeSnackbar, openSnackbar } = context;

  if (context === undefined) {
    throw new Error("SnackbarProvider must be used within a useSnackBar hook");
  }

  return { closeSnackbar, open, openSnackbar };
};

export default useSnackBar;
