export default function MovieTile() {
    return (
        <div className="flex flex-col items-center justify-center w-64 h-80 bg-emerald-900 rounded-lg p-6 text-lg mb-8">
            <img src="/ironman.png" className="object-cover rounded-xl my-2 shadow-lg outline outline-emerald-100"/>
            <p>title</p>
        </div>
    );
}