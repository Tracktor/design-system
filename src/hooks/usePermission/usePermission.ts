import { useCallback, useContext } from "react";
import PermissionContext from "@/context/Permission/PermissionContext";

const isPermissionPresent = (searchPermission: string, matchPermission: string[]): boolean => {
  if (searchPermission === "" || !matchPermission.length) {
    return false;
  }

  return matchPermission.some((permission) => searchPermission === permission);
};

/**
 * Hook to check permission
 */
const usePermission = () => {
  const { permissions, setPermissions, disabledPermissions } = useContext(PermissionContext);

  /**
   * Check if user has permission
   * @param name - Permission name
   * @param additionalPermissions (optional) - Additional permissions to check with combined context permissions
   */
  const hasPermission = useCallback(
    (name: string | string[], additionalPermissions?: string[]): boolean => {
      const allPermissions = [...(additionalPermissions || []), ...(permissions || [])];
      const enabledPermissions = allPermissions.filter((permission) => !disabledPermissions?.includes(permission));

      if (!enabledPermissions) {
        return false;
      }

      if (Array.isArray(name)) {
        return name.some((nameString) => isPermissionPresent(nameString, enabledPermissions));
      }

      return isPermissionPresent(name, enabledPermissions);
    },
    [disabledPermissions, permissions],
  );

  /**
   * Append permission to context value permissions
   */
  const appendPermissions = useCallback(
    (name: string): void => {
      setPermissions((prevState) => [...(prevState || []), name]);
    },
    [setPermissions],
  );

  return {
    appendPermissions,
    disabledPermissions,
    hasPermission,
    permissions,
    setPermissions,
  };
};

export default usePermission;
