'use client';
import React from 'react';

import DATA from './data';
import StoreItem from './StoreItem';
import CheckoutFlow from './CheckoutFlow';
import CartProvider from './CartProvider';
import './styles.css';

function CheckoutExercise() {
  return (
    <CartProvider>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem key={item.id} item={item} />
          ))}
        </div>

        <CheckoutFlow taxRate={0.15} />
      </main>
    </CartProvider>
  );
}

export default CheckoutExercise;
