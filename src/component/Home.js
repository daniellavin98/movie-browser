import Hero from './Hero'; 

const Home = () => {
    return(
      <div>
        <Hero text="Welcome to React 201"/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                I am a 25-year-old Software Engineer from Dublin, Ireland. I have recently moved to Calgary, Alberta. 
                Im here on the IEC work/travel Visa which allows me to obtain employment. Im a highly skilled developer, with proficiency in 
                many languages and technologies. I have much knowledge when it comes to development in finance, but Im also 
                proficient with Machine Learning, Image Processing, Deep Learning, Cyber Security, and IoT. Im a hardworking, dedicated, and loyal 
                employee who is a good communicator and always looking to improve. Im frequently learning new technologies and working on new projects.
              </p>
            </div>

          </div>

        </div>
      </div>
    )
}

export default Home; 