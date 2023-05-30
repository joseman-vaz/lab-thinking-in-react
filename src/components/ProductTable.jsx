import { ProductRow } from './ProductRow';

export function ProductTable({ products }) {
  return (
    <div>
      <div
        className="table-container"
        style={{ width: '70%', margin: '0 auto' }}
      >
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
