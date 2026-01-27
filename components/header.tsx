"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import MenuIcon from "@/public/menu-line.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141a16]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="#hero" onClick={() => setOpen(false)}>
          <Image src={Logo} alt="Visioad Logo" width={50} height={50} />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-white text-sm font-medium">
            <li className="hover:text-red-500"><Link href="#about">À propos</Link></li>
            <li className="hover:text-red-500"><Link href="#services">Services</Link></li>
            <li className="hover:text-red-500"><Link href="#stats">Stats</Link></li>
            <li className="hover:text-red-500"><Link href="#partenaires">Partenaires</Link></li>
            <li className="hover:text-red-500"><Link href="#avis">Avis Client</Link></li>
            <li className="hover:text-red-500"><Link href="#questions">Questions</Link></li>
          </ul>

          <Link
            href="#contact"
            className="border border-white text-white px-5 py-2 text-sm uppercase tracking-wide hover:text-red-500 hover:border-red-500 transition"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Image src={MenuIcon} alt="Menu" width={24} height={24}/>
        </button>
      </nav>

      <div
        className={`lg:hidden bg-[#141a16] transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white text-sm font-medium">
          <li className="hover:text-red-500"><Link href="#about" onClick={() => setOpen(false)}>À propos</Link></li>
          <li className="hover:text-red-500"><Link href="#services" onClick={() => setOpen(false)}>Services</Link></li>
          <li className="hover:text-red-500"><Link href="#stats" onClick={() => setOpen(false)}>Stats</Link></li>
          <li className="hover:text-red-500"><Link href="#partenaires" onClick={() => setOpen(false)}>Partenaires</Link></li>
          <li className="hover:text-red-500"><Link href="#avis" onClick={() => setOpen(false)}>Avis Client</Link></li>
          <li className="hover:text-red-500"><Link href="#questions" onClick={() => setOpen(false)}>Questions</Link></li>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="border border-white text-white px-6 py-2 uppercase tracking-wide hover:border-red-500 hover:text-red-500 transition"
          >
            Contact
          </Link>
        </ul>
      </div>
    </header>
  );
}
