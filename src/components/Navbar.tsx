import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" w-full flex items-center justify-between px-8 py-4 bg-transparent border-b border-slate-700 text-slate-800 font-medium z-10">
      <div>
        <img src="/images/logo.jpg" alt="Logo" className=" h-10 w-28" />
      </div>
      <div className=" flex gap-x-4">
        {["Home", "Categories", "About Us", "Contact Us"].map(
          (navItems, index: number) => (
            <Link
              key={index}
              // href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              href={"/"}
              className="hover:text-primary_color  relative group"
            >
              <p className=" flex items-center gap-x-1">
                {navItems} {navItems === "Categories" && <ChevronDown size={16} />}
              </p>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-800 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          )
        )}
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};
export default Navbar;
