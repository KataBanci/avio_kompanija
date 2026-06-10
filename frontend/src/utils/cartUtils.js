export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
  state.itemsPrice = addDecimal(
    state.cartItems.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.qty),
      0
    )
  )

  state.serviceFee = addDecimal(Number(state.itemsPrice) > 500 ? 0 : 20)

  state.taxPrice = addDecimal(Number(state.itemsPrice) * 0.15)

  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.serviceFee) +
    Number(state.taxPrice)
  ).toFixed(2)

  localStorage.setItem('cart', JSON.stringify(state))

  return state
}