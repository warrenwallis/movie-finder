export default function NavBar() {
    return (
        <nav className="flex justify-center bg-emerald-900 text-emerald-100 px-8 py-6">
            <div className="w-full max-w-6xl flex justify-between">
                <div className="text-4xl font-semibold">
                    Movie Site
                </div>
                <input className="rounded-lg w-60 px-2 bg-emerald-50 text-emerald-950 text-lg" type="text" placeholder="Search..."/>
            </div>
        </nav>
    );
};