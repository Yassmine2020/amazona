import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

// eslint-disable-next-line react/prop-types
export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quatity = existItem ? existItem.quantity + 1 : 1;
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: quatity },
    });
  };
  return (
    <div className="card ">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={addToCartHandler}>
          Add to card
        </button>
      </div>
    </div>
  );
}
