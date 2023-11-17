import { create } from "zustand";

export const useMovies = create((set) => ({
  movies: [{"id": 1, "nume": "nume1", "rating": 5, "lungime": 100}, {"id": 2, "nume": "nume2", "rating": 8, "lungime": 120}],

  addMovie: (id, nume, rating, lungime) => set((state) => {
    movies: [...state.movies, {"id": id, "nume": nume, "rating": rating, "lungime": lungime}]
  }),

  deleteMovie: (id) => set((state) => ({
    movies: state.movies.filter((movie) => {
      return movie.id == id
    })
  })),

  updateMovie: (id, newName, newRating, newLungime) => set((state) => ({
    movies: state.movies.map((movie) => {
      return movie.id == id ?
        { "id": id, "name": newName, "rating": newRating, "lungime": newLungime } :
        movie
    })
  }))
}))