function Movie({ id, nume, rating, lungime }) {
  return (
    <div>
      <p>ID: {id}</p>
      <p>NUME: {nume}</p>
      <p>RATING: {rating}</p>
      <p>LUNGIME: {lungime}</p>
    </div>
  )
}

export default Movie