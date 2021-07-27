import BookList from "../products/BookList";
import {ProductProvider} from "../products/ProductContext";

const Products = () => {
  
  return (
    <ProductProvider>
      <BookList></BookList>
    </ProductProvider>
  );
};

export default Products;
