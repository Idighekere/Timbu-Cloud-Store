import React from "react";

const YourOrder = () => {
  return (
    <div className="bg-white items-start sm:w-[40%] py-12 px-10 rounded-lg">
      <h1 className="font-[500] text-2xl tracking-[.2em] mb-8">YOUR ORDER</h1>
      <p>Glasses x4</p>
      <p className="font-[600]">$39.00</p>
      <hr className="my-10" />
      <div className="w-full">
        <div className="flex gap-10 w-full justify-between">
          <p className="font-[400] text-[#00000099]">Subtotal:</p>
          <p className="font-[400]">$156.00</p>
        </div>
        <div className="flex gap-10 w-ful justify-start items-center">
          <p className="font-[400] text-[#00000099]">Shipping:</p>
          <p className="text-[12px] font-[300] whitespace-nowrap">
            FREE SHIPPING
          </p>
        </div>
        <div className="flex gap-10 w-full justify-items-center">
          <p className="font-[400] text-[#00000099]">Total:</p>
          <p>$156.00</p>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
