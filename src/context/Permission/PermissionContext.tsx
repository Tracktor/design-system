import { createContext, Dispatch, SetStateAction } from "react";

export interface DefaultValuePermissionContext {
  permissions?: string[];
  setPermissions: Dispatch<SetStateAction<string[] | undefined>>;
  disabledPermissions?: string[];
}

export const defaultValuePermissionContext: DefaultValuePermissionContext = {
  disabledPermissions: undefined,
  permissions: undefined,
  setPermissions: () => {},
};
export const PermissionContext = createContext(defaultValuePermissionContext);

export default PermissionContext;
