import Hero from './Hero'; 

const AboutView = () => {
    return (
      <>
        <Hero text="About Us"/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                I am a 25-year-old Software Engineer from Dublin, Ireland. I have recently moved to Calgary, Alberta. 
                Im here on the IEC work/travel Visa which allows me to obtain employment. Im a highly skilled developer, with proficiency in 
                many languages and technologies. Im frequently learning new technologies and working on new projects.
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default AboutView; 