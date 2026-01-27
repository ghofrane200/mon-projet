import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#141a16] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

        <div className="space-y-4">
          <Link href={"#hero"}
            className="inline-block ">
            <Image src={LogoImg} alt="Logo" className="h-30 w-auto" />
            
          </Link>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-[">Liens rapides</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white transition">À propos</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </li>
            <li>
              <Link href="#questions" className="hover:text-white transition">Questions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">📧 Info@visioad.com</p>
          <p className="text-gray-400 mb-2">📞 +216 31 439 350</p>
          <p className="text-gray-400">📍Immeuble Centre Ibrahim,Av. Habib Bourguiba,Sousse 4000</p>
        </div>

      </div>
      <div>
        
      </div>
      <div className="border-t border-white/20 mt-8 pt-6 text-center text-gray-500 text-sm">
         © 2024 — Tous droits réservés par VISIOAD
     </div>
    </footer>
  );
}
