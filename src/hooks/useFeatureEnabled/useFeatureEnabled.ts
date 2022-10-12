import { useContext } from "react";
import FeatureEnableContext from "@/context/FeatureEnable/FeatureEnableContext";
import hasFeature from "@/utils/hasFeature";

/**
 * useFeatureEnabled hook
 * @return boolean
 */
export const useFeatureEnabled = () => {
  const { features: featureContext, setFeatures } = useContext(FeatureEnableContext);

  const getIsFeatureEnabled = (name: string | string[], features?: string[]) => {
    const userFeature = features || featureContext;

    if (!userFeature) {
      return false;
    }

    if (Array.isArray(name)) {
      return name.every((nameString) => hasFeature(nameString, userFeature));
    }

    return hasFeature(name, userFeature);
  };

  const appendFeature = (name: string) => {
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
