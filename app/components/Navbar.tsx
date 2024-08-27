"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/images/Logo-Loker.png";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "Beranda", to: "/" },
    { name: "Pasang Lowongan Kerja", to: "/pasang-iklan-lowongan" },
    { name: "Cari Lowongan Kerja", to: "/cari-lowongan-kerja" },
    { name: "Tips Loker", to: "/tips" },
  ];
  return (
    <nav className="flex justify-around px-4 py-6 items-center border-b border-blue-500 sticky top-0 z-50 bg-white">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" width={145} height={145} />
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-canter gap-8">
          {links.map((link) => (
            <Link
              href={link.to}
              key={link.name}
              className={`hover:border-b-4 hover:border-blue-500 text-gray-500  ${
                pathname === link.to && "border-b-4 text-black border-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-white font-medium px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-500">
            REGISTRASI
          </button>
          <button className="bg-purple-700 text-white font-medium px-4 py-2 rounded-md hover:bg-purple-800 transition-colors duration-500">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
}
