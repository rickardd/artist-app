import { useStore } from "../store/useStore";

export const SortByPrice = () => {
  // Subscribing to a state property instead of the entire state to prevent re-render on any store change.
  // E.g this will trigger unnecessary re-renders const { sortProductsByPrice } = useStore();
  const sortProductsByPrice = useStore((state) => state.sortProductsByPrice);

  return (
    <>
      <p>Sort by price</p>
      <button
        onClick={() => {
          sortProductsByPrice(true);
        }}
      >
        Lowest first
      </button>
      <br />
      <button
        onClick={() => {
          sortProductsByPrice(false);
        }}
      >
        Highest first
      </button>
    </>
  );
};
