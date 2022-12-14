import { createSlice } from "@reduxjs/toolkit";
// import { cartActions } from "./cartreducer";

const cartlistSlice = createSlice({
  name: "cartlist",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state,action){
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // console.log(existingItem);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// export const sendCartData =(cartlist) =>{
//   return async (dispatch)=>{
//     dispatch(
//       cartActions.showNotification({
//         status:'pending',
//         title:'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async ()=>{
//       const response = await fetch(
//         "https://expense-tracker-7f0ee-default-rtdb.firebaseio.com/cart.json",
//        {
//         method: 'PUT',
//         body: JSON.stringify(cartlist),
//        }
//       );
//       if(!response.ok){
//         throw new Error('Sending cart data failed.');
//       }
//     };
//     try{
//       await sendRequest();

//       dispatch(
//         cartActions.showNotification({
//           status:'success',
//           title:'Success!',
//           message: 'Sent cart data successfully!',
//         })
//       );

//     }catch(error){
//       dispatch(
//         cartActions.showNotification({
//           status:'error',
//           title:'Error!',
//           message:"Sending cart data failed!",
//         })
//       );
//     }
//   };
// };

export const cartlistActions = cartlistSlice.actions;
export default cartlistSlice;
