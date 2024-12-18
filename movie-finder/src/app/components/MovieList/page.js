import MovieTile from "./MovieTile";

export default function MovieList(props) {
    const { searchedMovie } = props;
    const movieTileList = [];

    for (let i = 0; i < 20; i++) {
        movieTileList.push(
            <MovieTile key={i}/>
        );
    }

    console.log(searchedMovie);

    return (    
        <div className="flex justify-center px-8 h-full mt-8">
            <div className="w-full max-w-6xl border border-red-400 flex flex-wrap justify-between">
                {movieTileList}
            </div>
        </div>
    );
}