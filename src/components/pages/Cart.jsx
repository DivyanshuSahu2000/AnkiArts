import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { MdDelete, MdOutlineEmojiEmotions } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const price = cart.reduce((sum, item) => sum + item.price, 0);
  const cgst = (price * 6) / 100;
  const sgst = (price * 6) / 100;
  const total = price + cgst + sgst;
  const handleRemoveFromCart = (item) => {
    removeFromCart(item.cartId);
    toast.success(`${item.title} removed from cart 🛒`, {
      position: "bottom-right",
      autoClose: 500,
      theme: "dark",
    });
  };
  const handleClearCart = () => {
    clearCart();
    toast.success(` removed all items from cart 🛒`, {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
    });
  };
  return (
    <div className=" md:px-23  sm:px-10 px-5 items-center sm:flex-col justifiy-center py-8">
      <div className="cartHeading">
        <h2 className="text-3xl font-medium font-serif">Your Cart</h2>
        <h2 className="text-sm font-medium text-gray-600 font-serif mb-6">
          You have {cart.length} items in your cart
        </h2>
      </div>
      {cart.length == 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="item_summary flex flex-col md:flex-row gap-2">
          <div className="itemss p-4 bg-amber-50 md:w-3/4 bordr-2 border-ambe-400 rounded-lg border border-gray-400 shadow-[0_0px_25px_rgba(0,0,0,30.7)] ">
            {" "}
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={item.cartId}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <Link key={item.id} to={`/paintings/${item.id}`}>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-serif font-semibold">
                          {item.title}
                        </h3>
                        <h3 className="text-gray-600">{item.type}</h3>
                        <h3 className="text-gray-600">{item.size}</h3>
                      </div>
                    </div>
                  </Link>
                  <div className="flex gap-2 justify-center items-center">
                    <p className="text-gray-600">₹{item.price}</p>
                    <button onClick={() => handleRemoveFromCart(item)}>
                      <MdDelete size={23} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  onClick={handleClearCart}
                  className="bg-red-100 flex gap-1 text-gray-700 px-4 py-2 rounded hover:bg-red-50"
                >
                  Clear cart
                  <div>
                    <RiDeleteBin2Fill size={21} />
                  </div>
                </button>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="summy md:w-1/4  p-2 font-serif text-gray-600 gap-2  text-2xl ">
            Cart Summary
            <h3 className="text-xl flex justify-between font-bold">
              <span>Price:</span>
              <span> ₹{price}</span>
            </h3>
            <h3 className="text-xl  flex justify-between font-semibold">
              <span> cgst: </span>
              <span>₹{cgst}</span>
            </h3>
            <h3 className="text-xl   flex justify-between font-semibold ">
              <span> sgst:</span>
              <span>₹{sgst}</span>
            </h3>
            <h3 className="text-2xl   flex justify-between font-bold">
              <span> Total:</span>
              <span>₹{total}</span>
            </h3>
            <div className="total p-2 flex-1">
              <button className="mt-2 flex gap-1 font-serif bg-green-600 text-white px-2 py-2 rounded hover:bg-green-700 text-xl">
                PLACE ORDER
                <MdOutlineEmojiEmotions className="mt-1" size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

// import { useContext } from "react";
// // import { useCart } from "../context/CartContext";
// import { CartContext } from "../../context/CartContext";
// import { MdDelete } from "react-icons/md";
// import { RiDeleteBin2Fill } from "react-icons/ri";
// import { MdOutlineEmojiEmotions } from "react-icons/md";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="p-8 px-25">
//       <h2 className="text-3xl font-medium font-serif">Your Cart</h2>
//       <h2 className="text-sm font-medium text-gray-600 font-serif mb-6">
//         You have {cart.length} items in your cart
//       </h2>
//       <div>
//         {cart.length === 0 ? (
//           <p>Your cart is empty 🛒</p>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {cart.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between border-b pb-2"
//                 >
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-20 h-16 object-cover rounded"
//                     />
//                     <div>
//                       <h3 className="font-semibold">{item.title}</h3>
//                       <p className="text-gray-600">₹{item.price}</p>
//                     </div>
//                   </div>
//                   <button onClick={() => removeFromCart(item.id)} className="">
//                     <MdDelete size={23} />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 flex justify-between items-center">
//               <h3 className="text-xl font-bold">Total: ₹{total}</h3>
//               <button
//                 onClick={clearCart}
//                 className="bg-red-700 flex gap-1 text-white px-4 py-2 rounded hover:bg-red-800"
//               >
//                 Clear cart
//                 <div>
//                   <RiDeleteBin2Fill size={21} />
//                 </div>
//               </button>
//             </div>

//             <button className="mt-4 flex gap-1 font-bold bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
//               PLACE ORDER
//               <MdOutlineEmojiEmotions className="mt-0.7" size={20} />
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
