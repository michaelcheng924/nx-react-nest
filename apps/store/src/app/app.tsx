import { Banner } from '@nx-test/common-ui';
import { exampleProducts } from '@nx-test/products';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <>
      <Banner text="Welcome to the store!!! ONLY THIS?" />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
