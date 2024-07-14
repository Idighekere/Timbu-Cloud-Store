import React from "react";
import { formatPrice } from "../utils/formatPrice";

const YourOrder = ({ cartItems, getTotal }) => {
  const total = getTotal()
  console.log(total)
  return (
    <div className="bg-white items-start sm:w-[40%] py-12 px-10 rounded-lg">
      <h1 className="font-[500] text-2xl tracking-[.2em] mb-8">YOUR ORDER</h1>

      {cartItems.length === 0 ? (<p>You have no order!!</p>) :
        <div>

          {cartItems.map(item => (
            <div><p>{item.name} x{item.quantity}</p>
              <p className="font-[600]">₦{item?.current_price[0].NGN[0] *item.quantity}</p>
            </div>
          ))}<hr className="my-10" />
          <div className="w-full">
            <div className="flex gap-10 w-fuvll justify-sbetween">
              <p className="font-[400] text-[#00000099]">Subtotal:</p>
              <p className="font-[400]">₦{getTotal()}</p>
            </div>
            <div className="flex gap-10 w-ful justify-start items-center">
              <p className="font-[400] text-[#00000099]">Shipping:</p>
              <p className="text-[12px] font-[300] whitespace-nowrap">
                {total >= 1000.00 ? "FREE SHIPPING" : "₦2.00"}
              </p>
            </div>
            <div className="flex gap-10 w-full ">
              <p className="font-[400] text-[#00000099] mr-6">Total:</p>
              <p>₦{total >= 1000.00 ? total : total * 2}</p>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default YourOrder;
