import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";

export const Filter = () => {
  const products = useStore((state) => state.products);
  const setCategories = useStore((state) => state.setCategories);
  const selectedCategories = useStore((state) => state.selectedCategories);

  // Perfornamce?
  const uniqueCategories = Array.from(new Set(products.map((item) => item.category)));

  // Initialize selectedOptions with selectedCategories from Zustand store
  const [selectedOptions, setSelectedOptions] = useState(selectedCategories);

  // Update selectedOptions whenever selectedCategories changes
  useEffect(() => {
    setSelectedOptions(selectedCategories);
  }, [selectedCategories]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(value)) {
        // If already selected, remove it
        return prevSelected.filter((option) => option !== value);
      } else {
        // If not selected, add it
        return [...prevSelected, value];
      }
    });
  };

  const onFilter = () => {
    setCategories(selectedOptions);
  };

  return (
    <div>
      <h3>Filter Options</h3>
      {uniqueCategories.map((option) => (
        <div key={option}>
          <label>
            <input type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={handleCheckboxChange} />
            {option}
          </label>
        </div>
      ))}
      <button onClick={onFilter}>Apply Filter</button>
    </div>
  );
};
