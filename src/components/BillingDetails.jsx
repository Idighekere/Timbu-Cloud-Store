import React from "react";

const globaStyles = {
  input: `bg-[#f4f4f4] px-4 py-2 placeholder:text-black`,
};
const BillingDetails = () => {
  return (
    <div className="bg-white rounded-lg py-12 px-3 sm:px-10 w-100% sm:w-[60%]">
      <h1 className="font-[500] text-xl sm:text-2xl text-center mb-7">
        BILLING DETAILS
      </h1>

      <form action="" className="flex flex-col gap-2 ">
        <div className="flex gap-3 w-full justify-between">
          <input
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
            className={`${globaStyles.input} flex-1 w-1/2`}
          />
          <input
            type="text"
            name="lastName"
            placeholder="LAST NAME"
            className={`${globaStyles.input} flex-1 w-1/2`}
          />
        </div>
        <input
          type="text"
          name="country"
          placeholder="COUNTRY"
          className={globaStyles.input}
        />
        <input
          type="text"
          name="address"
          placeholder="HOUSE ADDRESS"
          className={globaStyles.input}
        />
        <input
          type="text"
          name="townOrCity"
          placeholder="TOWN / CITY"
          className={globaStyles.input}
        />
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP CODE"
          className={globaStyles.input}
        />
        <input
          type="text"
          name="phone"
          placeholder="PHONE"
          className={globaStyles.input}
        />
        <input
          type="mail"
          name="email"
          placeholder="EMAIL"
          className={globaStyles.input}
        />
        <p className="m-6 underline text-center">
          SHIP TO A DIFFERENT ADDRESS?
        </p>
        <hr className="my-5" />
        <div className="flex items-center my-4">
          <input
            type="radio"
            placeholder=""
            id="bank"
            name="options"
            className="h-3 w-3"
          />
          <label htmlFor="bank"> DIRECT BANK TRANSFER</label>
        </div>
        <p className="text-[13px]">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order won’t be shipped until
          the funds have cleared in our account.
        </p>
        <div className="flex items-center mt-5">
          <input
            type="radio"
            placeholder=""
            id="cash"
            name="options"
            className="h-3 w-3 "
          />
          <label htmlFor="cash"> CASH ON DELIVERY</label>
        </div>
        <hr className="mb-10 mt-5" />

        <button className="bg-black text-white py-5 sm:py-[2d5px] sm:px-32d w-">
          PLACE ORDER
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;
