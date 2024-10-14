import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <h1 className="font-bold text-5xl text-center m-4 p-2">DYNAMIC ROUTING</h1>
      <div className="flex items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <Link href={"/dashboard"}>
          <button className="bg-yellow-400 p-2 px-4 rounded w-60">
            Dashboard
          </button>
        </Link>
        <Link href={"/blogs"}>
          <button className="bg-yellow-400 p-2 px-4 rounded w-60">
            See All Blogs
          </button>
        </Link>
        <Link href={"/contactus"}>
          <button className="bg-yellow-400 p-2 px-4 rounded w-60">
            Contact Us
          </button>
        </Link>
        <Link href={"/aboutus"}>
          <button className="bg-yellow-400 p-2 px-4 rounded w-60">
            About Us
          </button>
        </Link>


      </div>
    </div>
  );
}

