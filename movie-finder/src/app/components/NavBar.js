import { useState } from "react";

export default function NavBar(props) {
    const { setSearchMovie } = props;
    const [ search, setSearch ] = useState("");

    return (
        <nav className="flex justify-center bg-emerald-900 text-emerald-100 px-8 py-6 shadow-md">
            <div className="w-full max-w-6xl flex justify-between items-center">
                <div className="text-4xl font-semibold">
                    Movie Site
                </div>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSearchMovie(search);
                    }}
                >
                    <input 
                        className="rounded-lg w-60 px-2 bg-emerald-50 text-emerald-800 text-lg" 
                        type="text" 
                        placeholder="Search..." 
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </form>
            </div>
        </nav>
    );
};