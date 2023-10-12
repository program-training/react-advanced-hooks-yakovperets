import { useState } from "react";

import { items } from "../../data/carts";
import ItemCart from "./ItemCart";
import Cart from "./Cart";
interface Item {
  id: number;
  name: string;
  price: string;
}

const ShoppingCart = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const addNumber = (newNumber: number) => {
    setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
  };
  const product = items;
  const handleAddToCart = (item: Item) => {
    console.log(`Added  to cart`);
  };

  return (
    <>
      <div>
        {product.map((item) => (
          <ItemCart
            addNumber={addNumber}
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div>
        <Cart numbers={numbers} />
      </div>
    </>
  );
};

export default ShoppingCart;
