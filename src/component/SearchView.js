import Hero from "./Hero";
import { Link } from 'react-router-dom'
// TMDB API KEY = fcd691440667343e3f086fe723a4f311
//Example Links : https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=fcd691440667343e3f086fe723a4f311

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    )
} 

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    })
    
    return (
        <>

            <Hero text={title}/>
            {resultsHtml && 
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>

            </div>}
        </>
    )
}

export default SearchView; 