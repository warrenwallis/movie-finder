import MovieTile from "./MovieTile";

export default function MovieList() {
    return (    
        <div className="flex justify-center px-8 h-full mt-8">
            <div className="w-full max-w-6xl border border-red-400">
                <MovieTile />
            </div>
        </div>
    );
}