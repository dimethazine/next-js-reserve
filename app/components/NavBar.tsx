import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex p-2 justify-between bg-white ">
      <Link href="#" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <button className="mr-3 bg-blue-400 text-white p-1 px-4 rounded">
            Sign In
          </button>
          <button className="border p-1 px-4 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
