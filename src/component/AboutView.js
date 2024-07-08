import Hero from './Hero'; 

const AboutView = () => {
    return (
      <>
        <Hero text="About Us"/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                This project was to learn more and expand my skills with ReactJS. The UI fetchs movie data from the TMDB API and shows the overview
                , release date, budget, and box office return. It also shows the movie posters after the search and in the detail view. This was an interesting 
                project and a good way of learning more ReactJS. 
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default AboutView; 