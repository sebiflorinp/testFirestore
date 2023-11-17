import { useMovies } from "../stores/useMovies"
import { useState } from "react" 
import Movie from "../components/Movie"

function DeleteMovie() {
  const movies = useMovies((state) => state.movies)
  const deleteMovies = useMovies((state) => state.deleteMovie)
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div>
      <Movie id={movies[currentIndex].id} nume={movies[currentIndex].nume} rating={movies[currentIndex].rating} lungime={movies[currentIndex].lungime} />
      {currentIndex && (
        <button>Previous Movie</button>
      )}
    </div>
  )
}

export default DeleteMovie