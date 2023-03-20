import { useCallback, useContext } from "react";
import FeatureEnableContext from "@/context/FeatureEnable/FeatureEnableContext";
import hasFeature from "@/utils/hasFeature";

/**
 * Hook to manage the state of a feature.
 */
export const useFeatureEnabled = () => {
  const { features: featureContext, setFeatures } = useContext(FeatureEnableContext);

  const getIsFeatureEnabled = useCallback(
    (name: string | string[], features?: string[]): boolean => {
      const userFeature = features || featureContext;

      if (!userFeature) {
        return false;
      }

      if (Array.isArray(name)) {
        return name.every((nameString) => hasFeature(nameString, userFeature));
      }

      return hasFeature(name, userFeature);
    },
    [featureContext]
  );

  const appendFeature = useCallback(
    (name: string): void => {
      setFeatures((prevState) => {
        if (prevState) {
          return [...prevState, name];
        }

        return undefined;
      });
    },
    [setFeatures]
  );

  return { appendFeature, getIsFeatureEnabled };
};

export default useFeatureEnabled;
