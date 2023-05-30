import { useState } from 'react';
import jsonData from '../data.json';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <div>
      <h1 className="mb-3">IronStore</h1>
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
