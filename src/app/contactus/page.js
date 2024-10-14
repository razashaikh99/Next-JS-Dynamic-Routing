import Link from "next/link"; 

export default function ContactUs() {
    return (
        <div className="container mx-auto text-center p-20">
            <h1 className="font-bold text-5xl">Contact Us</h1>
            <Link href={"/"}>
                <button className="bg-yellow-400 p-2 px-4 m-10 rounded w-60">
                        Home
                    </button>
                </Link>
        </div> 
    );
}

