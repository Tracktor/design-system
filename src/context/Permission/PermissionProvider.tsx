import { ReactNode, useEffect, useMemo, useState } from "react";
import PermissionContext from "@/context/Permission/PermissionContext";

export interface PermissionProviderProps {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Permissions to access
   */
  permissions?: string[];
  /**
   * Permissions disabled (override permissions)
   */
  disabledPermissions?: string[];
}

export const PermissionProvider = ({ children, permissions, disabledPermissions }: PermissionProviderProps) => {
  const [permissionsState, setPermissionsState] = useState<string[]>();

  const value = useMemo(
    () => ({
      disabledPermissions,
      permissions: permissionsState,
      setPermissions: setPermissionsState,
    }),
    [disabledPermissions, permissionsState],
  );

  useEffect(() => {
    setPermissionsState(permissions);
  }, [permissions]);

  return <PermissionContext.Provider value={value}>{children}</PermissionContext.Provider>;
};

export default PermissionProvider;
