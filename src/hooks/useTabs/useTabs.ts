import { SyntheticEvent, useCallback, useState } from "react";

/**
 * Hook to manage the state of a tabs component.
 */
const useTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback((_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }, []);

  return {
    handleChange,
    value,
  };
};

export default useTabs;
