import { useCallback, useContext } from "react";
import FeatureEnableContext from "@/context/FeatureEnable/FeatureEnableContext";
import hasFeature from "@/utils/hasFeature";

/**
 * Hook to manage the state of a feature.
 */
const useFeatureEnabled = () => {
  const { features: featureFromContext, setFeatures, disabledFeatures } = useContext(FeatureEnableContext);

  const getIsFeatureEnabled = useCallback(
    (name: string | string[], features?: string[]): boolean => {
      const allFeatures = [...(features || []), ...(featureFromContext || [])];
      const userFeatureWithFilteredDisabled = allFeatures.filter((feature) => !disabledFeatures?.includes(feature));

      if (!userFeatureWithFilteredDisabled) {
        return false;
      }

      if (Array.isArray(name)) {
        return name.some((nameString) => hasFeature(nameString, userFeatureWithFilteredDisabled));
      }

      return hasFeature(name, userFeatureWithFilteredDisabled);
    },
    [disabledFeatures, featureFromContext],
  );

  const appendFeature = useCallback(
    (name: string): void => {
      setFeatures((prevState) => [...(prevState || []), name]);
    },
    [setFeatures],
  );

  return { appendFeature, features: featureFromContext, getIsFeatureEnabled };
};

export default useFeatureEnabled;
