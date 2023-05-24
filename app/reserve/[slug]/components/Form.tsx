const Form = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        placeholder="First Name"
        className="border rounded p03 w-80 mb-4"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border rounded p03 w-80 mb-4"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="border rounded p03 w-80 mb-4"
      />
      <input
        type="text"
        placeholder="Email"
        className="border rounded p03 w-80 mb-4"
      />
      <input
        type="text"
        placeholder="Occasion (optional)"
        className="border rounded p03 w-80 mb-4"
      />
      <input
        type="text"
        placeholder="Special Requests (optional)"
        className="border rounded p03 w-80 mb-4"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete Reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Message & data rates may apply. You can opt out
        of receiving text messages at any time in your account settings or by
        replying STOP.
      </p>
    </div>
  );
};

export default Form;
