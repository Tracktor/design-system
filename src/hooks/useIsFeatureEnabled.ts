interface UseIsFeatureEnabledParams {
  /**
   *  Feature name
   */
  name?: string | string[];
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
 * @param user
 * @return boolean
 */
export const useIsFeatureEnabled = ({ name, user }: UseIsFeatureEnabledParams): boolean => {
  const { ABTest } = user || {};

  const hasFeature = (nameABTest: string) => ABTest?.some((n) => nameABTest.includes(n)) || false;

  if (!name) return false;

  if (Array.isArray(name)) {
    return name.every((n) => hasFeature(n));
  }

  return hasFeature(name);
};

export default useIsFeatureEnabled;
