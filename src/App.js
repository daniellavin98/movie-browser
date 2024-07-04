import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import AboutView from './component/AboutView';
import SearchView from './component/SearchView'; 
import MovieView from './component/MovieView'; 
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {


  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState(''); 
  

  useEffect(() => {
    
    if(searchText){

      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=fcd691440667343e3f086fe723a4f311`)
      .then(response => response.json())
      .then(data => {
      
        setSearchResults(data.results)
      })

    }
    

  }, [searchText])


  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutView/>}/>
      </Routes>
      <Routes>
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
      </Routes>
      <Routes>
        <Route path="/movies/:id" element={<MovieView/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
