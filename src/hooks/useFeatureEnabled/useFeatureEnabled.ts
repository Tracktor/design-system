import { useContext } from "react";
import FeatureEnableContext from "@/context/FeatureEnable/FeatureEnableContext";
import hasFeature from "@/utils/hasFeature";

/**
 * Hook to manage the state of a feature.
 */
export const useFeatureEnabled = () => {
  const { features: featureContext, setFeatures } = useContext(FeatureEnableContext);

  const getIsFeatureEnabled = (name: string | string[], features?: string[]): boolean => {
    const userFeature = features || featureContext;

    if (!userFeature) {
      return false;
    }

    if (Array.isArray(name)) {
      return name.every((nameString) => hasFeature(nameString, userFeature));
    }

    return hasFeature(name, userFeature);
  };

  const appendFeature = (name: string): void => {
    setFeatures((prevState) => {
      if (prevState) {
        return [...prevState, name];
      }

      return undefined;
    });
  };

  return { appendFeature, getIsFeatureEnabled };
};

export default useFeatureEnabled;
