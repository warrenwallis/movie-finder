import MovieList from "./components/MovieList/page";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="h-screen bg-emerald-50">
      <NavBar />
      <MovieList />
    </div>
  );
}
