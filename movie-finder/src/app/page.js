"use client";

import { useState } from "react";
import MovieList from "./components/MovieList/page";
import NavBar from "./components/NavBar";

export default function Home() {
  const [ searchedMovie, setSearchMovie ] = useState("");

  return (
    <div className="h-full bg-emerald-50">
      <NavBar setSearchMovie={(val) => setSearchMovie(val)} />
      <MovieList searchedMovie={searchedMovie} />
    </div>
  );
}
