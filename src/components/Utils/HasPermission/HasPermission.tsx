import type { ReactNode } from "react";
import usePermission from "@/hooks/usePermission";

export interface HasPermissionProps {
  /**
   *  Permissions name or array of permission names
   */
  name: string | string[];
  /**
   *  The content of the component
   */
  children?: ReactNode;
  /**
   * A fallback react to display when permissions is not enabled for given name
   */
  fallback?: ReactNode;
  /**
   * Additional permissions to check with combined context permissions
   */
  additionalPermissions?: string[];
}

export const HasPermission = ({ children, fallback, name, additionalPermissions }: HasPermissionProps) => {
  const { hasPermission } = usePermission();
  const hasAccess = hasPermission(name, additionalPermissions);

  if (hasAccess) {
    return children;
  }

  if (!hasAccess && fallback) {
    return fallback;
  }

  return null;
};

export default HasPermission;
