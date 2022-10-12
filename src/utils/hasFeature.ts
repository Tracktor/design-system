const hasFeature = (searchFeature: string, matchFeatures: string[]): boolean => {
  if (searchFeature === "" || !matchFeatures.length) {
    return false;
  }

  return matchFeatures.some((feature) => searchFeature === feature);
};

export default hasFeature;
