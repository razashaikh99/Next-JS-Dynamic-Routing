import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="container mx-auto text-center p-20">
            <h1 className="font-bold text-5xl">Dashboard</h1>

            <div>
                <Link href={"/dashboard/settings"}>
                <button className="bg-yellow-400 p-2 px-4 m-10 rounded w-60">
                        Settings
                    </button>
                </Link>
                <Link href={"/dashboard/profile"}>
                <button className="bg-yellow-400 p-2 px-4 m-10 rounded w-60">
                        Profile
                    </button>
                </Link>
            </div>
        </div>
    );
}

