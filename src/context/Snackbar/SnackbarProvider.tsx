import { Alert, AlertColor, Snackbar } from "@mui/material";
import type { SnackbarOrigin } from "@mui/material/Snackbar/Snackbar";
import { createContext, ElementType, PropsWithChildren, useCallback, useMemo, useState } from "react";

interface SnackBarState {
  message: string;
  open: boolean;
  severity: AlertColor;
  component?: ElementType;
}

interface SnackbarContextValue {
  closeSnackbar(): void;
  openSnackbar(params?: openSnackbarParams): void;
  open: boolean;
}

interface openSnackbarParamsWithComponent {
  component: ElementType;
  severity?: never;
  message?: never;
}

interface openSnackbarParamsWithMessage {
  component?: never;
  severity?: AlertColor;
  message: string;
}

export type openSnackbarParams = openSnackbarParamsWithComponent | openSnackbarParamsWithMessage;

export interface SnackbarProviderProps extends PropsWithChildren {
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
}

const defaultSnackbarState: SnackBarState = {
  component: undefined,
  message: "",
  open: false,
  severity: "success",
};

export const SnackbarContext = createContext<SnackbarContextValue>({
  closeSnackbar: () => {},
  open: false,
  openSnackbar: () => {},
});

const SnackbarProvider = ({
  children,
  autoHideDuration = 6000,
  anchorOrigin = { horizontal: "center", vertical: "bottom" },
}: SnackbarProviderProps) => {
  const [snackbar, setSnackbar] = useState<SnackBarState>(defaultSnackbarState);

  const openSnackbar = useCallback((params: openSnackbarParams) => {
    setSnackbar({
      component: params?.component,
      message: params?.message || "",
      open: true,
      severity: params?.severity || "success",
    });
  }, []);

  const closeSnackbar = useCallback(() => {
    setSnackbar(defaultSnackbarState);
  }, []);

  const value = useMemo(() => ({ closeSnackbar, open: snackbar.open, openSnackbar }), [closeSnackbar, openSnackbar, snackbar.open]);

  return (
    <SnackbarContext.Provider value={value}>
      <Snackbar open={snackbar.open} onClose={closeSnackbar} autoHideDuration={autoHideDuration} anchorOrigin={anchorOrigin}>
        {snackbar.component ? <snackbar.component /> : <Alert severity={snackbar.severity}>{snackbar.message}</Alert>}
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
