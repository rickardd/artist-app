import "./App.css";
import ProductList from "./components/ProductList";
import { DarModeButton } from "./components/DarkModeButton";
import { ResetFilterButton } from "./components/ResetFilterButton";
import SearchBar from "./components/SearchBar";
import { Filter } from "./components/Filters";
import { SortByPrice } from "./components/SortByPriceButton";

function App() {
  return (
    <>
      <DarModeButton />
      <ResetFilterButton></ResetFilterButton>
      <SearchBar />
      <SortByPrice />
      <Filter />
      <ProductList></ProductList>
    </>
  );
}

export default App;
