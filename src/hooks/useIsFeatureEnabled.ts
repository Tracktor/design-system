interface UseIsFeatureEnabledParams {
  /**
   *  Feature name
   */
  name: string | string[];
  /**
   * Predicate
   * @default "features"
   */
  predicate?: string;
  /**
   * User object
   */
  user?: {
    [key: string | number | symbol]: any;
    features?: string[];
  };
}

/**
 * Return { boolean } user feature enable
 * @param name
 * @param predicate
 * @param user
 * @return boolean
 */
export const useIsFeatureEnabled = ({ name, predicate = "features", user }: UseIsFeatureEnabledParams): boolean => {
  const userFeature = user?.[predicate] || [];
  const hasFeature = (searchFeature: string, features: string[]) => features.some((feature) => searchFeature === feature);

  if (Array.isArray(name)) {
    return name.every((nameString) => hasFeature(nameString, userFeature));
  }

  return hasFeature(name, userFeature);
};

export default useIsFeatureEnabled;
