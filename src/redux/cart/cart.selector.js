import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// const slectUser = state => state.user;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumaletedQuantity, cartItem) => accumaletedQuantity + cartItem.quantity, 0
    )
);