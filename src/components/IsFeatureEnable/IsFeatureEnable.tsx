import type { ReactNode } from "react";
import { useIsFeatureEnabled } from "@/hooks/useIsFeatureEnabled";

interface IsFeatureEnableProps {
  /**
   *  Feature name
   */
  name?: string | string[];
  /**
   *  The content of the component
   */
  children?: ReactNode;
  /**
   * A fallback react tree to show when user has not ABTest
   */
  fallback?: ReactNode;
  /**
   * Predicate
   * @default "ABTest"
   */
  predicate?: string;
  /**
   * User object
   */
  user?: {
    ABTest?: string[];
  };
}

const IsFeatureEnable = ({ children, fallback, name, predicate = "ABTest", user }: IsFeatureEnableProps) => {
  const featureEnabled = useIsFeatureEnabled({ name, predicate, user });

  if (featureEnabled) {
    return children;
  }

  if (!featureEnabled && fallback) {
    return fallback;
  }

  return null;
};

export default IsFeatureEnable;
