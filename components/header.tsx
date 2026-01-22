import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png"
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#141a16]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src={Logo} 
            alt="Visioad Logo"
            width={50}
            height={50}
          />
        </div>
        <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
          <li><Link href="#about" className="hover:text-gray-300">À propos</Link></li>
          <li><Link href="#services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="#stats" className="hover:text-gray-300">Stats</Link></li>
          <li><Link href="#partners" className="hover:text-gray-300">Partenaires</Link></li>
          <li><Link href="#reviews" className="hover:text-gray-300">Avis Client</Link></li>
          <li><Link href="#faq" className="hover:text-gray-300">Questions</Link></li>
        </ul>
        <Link
          href="#contact"
          className="border border-white text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
