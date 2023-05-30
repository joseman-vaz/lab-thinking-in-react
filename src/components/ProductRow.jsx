export function ProductRow({ product }) {
  const { name, price, inStock } = product;

  return (
    <tr className={inStock ? '' : 'table-danger'}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
