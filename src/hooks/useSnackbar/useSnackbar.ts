import { useContext } from "react";
import { SnackbarContext } from "@/context/Snackbar/SnackbarProvider";

/**
 * Hook to handle the snackbar
 */
const useSnackBar = () => {
  const context = useContext(SnackbarContext);
  const { isOpen, closeSnackbar, openSnackbar } = context;

  if (context === undefined) {
    throw new Error("SnackbarProvider must be used within a useSnackBar hook");
  }

  return {
    closeSnackbar,
    isOpen,
    openSnackbar,
  };
};

export default useSnackBar;
