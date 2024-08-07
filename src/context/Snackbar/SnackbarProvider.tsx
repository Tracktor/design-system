import { Alert, AlertColor, AlertProps, Snackbar } from "@mui/material";
import type { SnackbarOrigin } from "@mui/material/Snackbar/Snackbar";
import { createContext, ElementType, PropsWithChildren, SyntheticEvent, useCallback, useMemo, useState } from "react";

interface SnackBarState {
  message: string;
  isOpen: boolean;
  severity: AlertColor;
  component?: ElementType;
  variant?: AlertProps["variant"];
}

interface openSnackbarParamsWithComponent {
  component: ElementType;
  severity?: never;
  message?: never;
  variant?: never;
}

interface openSnackbarParamsWithMessage {
  component?: never;
  severity?: AlertColor;
  variant?: AlertProps["variant"];
  message: string;
}

export type openSnackbarParams = openSnackbarParamsWithComponent | openSnackbarParamsWithMessage;

interface SnackbarContextValue {
  closeSnackbar(): void;
  openSnackbar(params?: openSnackbarParams): void;
  isOpen: boolean;
}

export interface SnackbarProviderProps extends PropsWithChildren {
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
}

const defaultSnackbarState: SnackBarState = {
  component: undefined,
  isOpen: false,
  message: "",
  severity: "success",
  variant: "standard",
};

export const SnackbarContext = createContext<SnackbarContextValue>({
  closeSnackbar: () => {},
  isOpen: false,
  openSnackbar: () => {},
});

const SnackbarProvider = ({
  children,
  autoHideDuration = 5000,
  anchorOrigin = { horizontal: "center", vertical: "bottom" },
}: SnackbarProviderProps) => {
  const [snackbar, setSnackbar] = useState<SnackBarState>(defaultSnackbarState);

  const openSnackbar = useCallback((params: openSnackbarParams) => {
    setSnackbar({
      component: params?.component,
      isOpen: true,
      message: params?.message || "",
      severity: params?.severity || "success",
      variant: params?.variant || "standard",
    });
  }, []);

  const closeSnackbar = useCallback((_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((prevState) => ({ ...prevState, isOpen: false }));
  }, []);

  const value = useMemo(
    () => ({
      closeSnackbar,
      isOpen: snackbar.isOpen,
      openSnackbar,
    }),
    [closeSnackbar, openSnackbar, snackbar.isOpen],
  );

  return (
    <SnackbarContext.Provider value={value}>
      <Snackbar
        open={snackbar.isOpen}
        onClose={closeSnackbar}
        autoHideDuration={autoHideDuration}
        anchorOrigin={anchorOrigin}
        key={snackbar.message}
      >
        {snackbar.component ? (
          <snackbar.component />
        ) : (
          <Alert severity={snackbar.severity} variant={snackbar.variant}>
            {snackbar.message}
          </Alert>
        )}
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
