import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-ashe-400 py-4 px-8 text-white flex justify-center items-center fixed top-0 left-0 w-full z-10 h-16">
      {/* Centered Text */}
      <h1 className="text-3xl font-bold" style={{ fontFamily: "", margin: "0 auto" }}>
        Welcome to Real Time Ticketing
      </h1>

      {/* Navigation Links */}
      <nav className="flex gap-6 ml-auto">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/admin" className="hover:underline">Admin</Link>
        <Link href="/simulate" className="hover:underline">Simulate</Link>
      </nav>
    </header>
  );
};

export default Navbar;
