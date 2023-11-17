import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <Link to="/"><button>Main Page</button></Link>
      <Link to="/addMovie"><button>Add Movie</button></Link>
      <Link to="/viewMovies"><button>View Movies</button></Link>
      <Link to="/updateMovie"><button>Update Movie</button></Link>
      <Link to="/deleteMovie"><button>Delete Movie</button></Link>
    </div>
  )
}

export default NavBar