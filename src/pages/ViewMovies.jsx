import { useMovies } from "../stores/useMovies"
import Movie from "../components/Movie"

function ViewMovies() {
  const movies = useMovies((state) => state.movies)
  return (
    <div>
      {movies.map((movie) => {
        return <Movie key={movie.id} id={movie.id} nume={movie.nume} rating={movie.rating} lungime={movie.lungime}/>
      })}
    </div>
  )
}

export default ViewMovies