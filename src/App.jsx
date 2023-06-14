import './App.css'
import Movie from './components/Movie'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MovieDetail from './pages/MovieDetail';

function App() {

  return (
    <>
    <h1>Movie Database</h1>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Movie/>} />
      <Route path='/MovieDetail/:title' element={<MovieDetail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
