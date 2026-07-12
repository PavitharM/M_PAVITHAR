import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-3 px-6 md:px-12 bg-black border-t border-white/5 relative z-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 text-center md:text-left">
        <div>
          <h4 className="text-white font-medium text-base tracking-wider mb-1 uppercase">Contact Number</h4>
          <p className="text-white/60 font-light text-sm">+94 75 608 8619</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-medium text-base tracking-wider mb-1 uppercase">Email</h4>
          <a href="mailto:pavitharpavithar@gmail.com" className="text-white/60 font-light text-sm hover:text-white transition-colors relative group">
            pavitharpavithar@gmail.com
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="text-white font-medium text-base tracking-wider mb-1 uppercase">Location</h4>
          <p className="text-white/60 font-light text-sm">Batticaloa|Sri Lanka</p>
        </div>
      </div>

      <div className="container mx-auto text-center pt-3 border-t border-white/5">
        <p className="text-white/40 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} MANGALESWARAN PAVITHAR
        </p>
        <p className="text-white/40 text-sm font-light tracking-wide mt-2">
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
