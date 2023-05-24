import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl mx-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xsmall/1/23695933.jpg"
                  alt=""
                  className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold">Gratzzi Grille</h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Mon, May 22</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HEADER */} {/* FORM */} {/* FORM */}
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
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Message & data rates may apply.
                You can opt out of receiving text messages at any time in your
                account settings or by replying STOP.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
