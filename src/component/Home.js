import Hero from './Hero'; 

const Home = () => {
    return(
      <div>
        <Hero text="Simple Movie Browser"/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                Welcome to this Movie Browser User Interface developed using ReactJS. 
                <br/>
                This incoroporates The Movie Datbase API to search and show movies. 
                <br/>

                Give it a try!!!
                <br/>
                Search a movie in the search bar above. 
              </p>
            </div>

          </div>

        </div>
      </div>
    )
}

export default Home; 