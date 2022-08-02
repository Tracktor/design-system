interface UseIsFeatureEnabledParams {
  /**
   *  Name to check
   */
  name: string | string[];
  /**
   * Features optional if not given to provider
   */
  features?: string[];
}

/**
 * Return { boolean } user feature enable
 * @param name
 * @param predicate
 * @return boolean
 */
export const useIsFeatureEnabled = ({ name, features }: UseIsFeatureEnabledParams): boolean => {
  const userFeature = features || [];
  const hasFeature = (searchFeature: string, matchFeatures: string[]) => matchFeatures.some((feature) => searchFeature === feature);

  if (Array.isArray(name)) {
    return name.every((nameString) => hasFeature(nameString, userFeature));
  }

  return hasFeature(name, userFeature);
};

export default useIsFeatureEnabled;
