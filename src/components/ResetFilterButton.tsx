import { useStore } from "../store/useStore";

export const ResetFilterButton = () => {
  const resetFilters = useStore((state) => state.resetFilters);

  return <button onClick={resetFilters}>Reset Filters</button>;
};
