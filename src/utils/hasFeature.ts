/**
 * Check if a feature is present in a list of features given
 * @param searchFeature
 * @param matchFeatures
 */
const hasFeature = (searchFeature: string, matchFeatures: string[]): boolean => {
  if (searchFeature === "" || !matchFeatures.length) {
    return false;
  }

  return matchFeatures.some((feature) => searchFeature === feature);
};

export default hasFeature;
