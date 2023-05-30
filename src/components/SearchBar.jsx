import { useState } from 'react';

export function SearchBar({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const theSearch = () => {
    let filtered = products;
    if (inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  const theOnChange = (event) => {
    setSearchTerm(event.target.value);
    theSearch();
  };
  const handleChangeInStockOnly = (event) => {
    setInStockOnly(event.target.checked);
    theSearch();
  };
  return (
    <div className="mb-3" style={{ width: '70%', margin: '0 auto' }}>
      <button onClick={theSearch} className="btn btn-primary mb-3">
        Reset Search
      </button>
      <input
        className="form-control"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={theOnChange}
      />
      <div className="d-flex align-items-center mt-2 justify-content-center">
        <input
          type="checkbox"
          className="form-check-input"
          id="inStockOnly"
          checked={inStockOnly}
          onChange={handleChangeInStockOnly}
        />
        <label className="form-check-label m-2" htmlFor="inStockOnly">
          In Stock Only
        </label>
      </div>
    </div>
  );
}
