import { useCallback, useContext } from "react";
import PermissionContext from "@/context/Permission/PermissionContext";

export type PermissionCheckMode = "or" | "and";
export const DEFAULT_PERMISSION_CHECK_MODE: PermissionCheckMode = "or";

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
   * @param operator (optional) - Operator to use when checking multiple permissions ("or" or "and")
   */
  const hasPermission = useCallback(
    (
      name: string | string[],
      additionalPermissions?: string[],
      permissionCheckMode: PermissionCheckMode = DEFAULT_PERMISSION_CHECK_MODE,
    ): boolean => {
      const allPermissions = [...(additionalPermissions || []), ...(permissions || [])];
      const enabledPermissions = allPermissions.filter((permission) => !disabledPermissions?.includes(permission));

      if (!enabledPermissions.length) {
        return false;
      }

      if (Array.isArray(name)) {
        if (permissionCheckMode === DEFAULT_PERMISSION_CHECK_MODE) {
          // Default behavior - check if user has at least one permission
          return name.some((nameString) => isPermissionPresent(nameString, enabledPermissions));
        }
        // "and" operator - check if user has all permissions
        return name.every((nameString) => isPermissionPresent(nameString, enabledPermissions));
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
