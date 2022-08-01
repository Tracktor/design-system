interface UseIsFeatureEnabledParams {
  /**
   *  Feature name
   */
  name?: string | string[];
  /**
   * Predicate default is "ABTest"
   */
  predicate?: string;
  /**
   * User object
   */
  user?: {
    [key: string | number | symbol]: any;
    ABTest?: string[];
  };
}

/**
 * Return { boolean } user feature enable
 * @param name
 * @param predicate
 * @param user
 * @return boolean
 */
export const useIsFeatureEnabled = ({ name, predicate = "ABTest", user }: UseIsFeatureEnabledParams): boolean => {
  const ABTest = user?.[predicate] || [];

  const hasFeature = (featureName: string, features: string[]) => features?.some((feature) => featureName.includes(feature)) || false;
  if (!name) return false;

  if (Array.isArray(name)) {
    return name.every((n) => hasFeature(n, ABTest));
  }

  return hasFeature(name, ABTest);
};

export default useIsFeatureEnabled;
