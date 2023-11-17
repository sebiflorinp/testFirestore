import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ViewMovies from "./pages/ViewMovies"
import AddMovie from "./pages/AddMovie"
import DeleteMovie from "./pages/DeleteMovie"
import UpdateMovie from "./pages/UpdateMovie"
import NavBar from "./components/NabBar"

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/viewMovies" element={<ViewMovies />} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="/deleteMovie" element={<DeleteMovie />} />
        <Route path="/updateMovie" element={<UpdateMovie />} />
      </Routes>
    </div>
  )
}

export default App