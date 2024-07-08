
import Hero from "./Hero"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

const MovieView = () => {
    const { id } = useParams()
    const [ movieDetails, setMovieDetails ] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fcd691440667343e3f086fe723a4f311`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setMovieDetails(data)
            setIsLoading(false)
        })
    
    }, [id])

    function renderMovieDetails() {
        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){

            const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            const backdropPath = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`

            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropPath}/>
                    <div className="container" my-5>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>

                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    <h3>Overview</h3>
                                    {movieDetails.overview}
                                </p>
                                <p className="lead">
                                    <b>Release Date</b>: {movieDetails.release_date}
                                    <br/>
                                    <b>Runtime</b>: {movieDetails.runtime} mins
                                    <br/>
                                    <b>Budget</b>: ${movieDetails.budget}
                                    <br/>
                                    <b>Revenue</b>: ${movieDetails.revenue}
                                    

                                </p>

                            </div>

                        </div>

                    </div>
                </>
            )
        }
    }

    return renderMovieDetails(); 
}

export default MovieView; 