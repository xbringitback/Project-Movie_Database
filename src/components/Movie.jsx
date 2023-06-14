import Data from './Data'
import MovieItem from './MovieItem'
import {useState} from 'react'
import { Link } from 'react-router-dom';

const MovieList = () => {
    const [dataFilter, setDataFilter] = useState(Data);

    const [searchGenre, setSearchGenre] = useState('');
  
    const handleAtoZ = () => {
        setDataFilter([...dataFilter].sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            }
            return 0;
        }));
    };

    const handleZtoA = () => {
        setDataFilter([...dataFilter].sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            } else if (a.title > b.title) {
                return -1;
            }
            return 0;
        }));
    };

    const handleRateDown = () => {
        setDataFilter([...dataFilter].sort((a, b) => {
            return b.rate - a.rate;
        }));
    };

    const handleYearDown = () => {
        setDataFilter([...dataFilter].sort((a, b) => {
            return b.year - a.year;
        }));
    };

    const handleYearUp = () => {
        setDataFilter([...dataFilter].sort((a, b) => {
            return a.year - b.year;
        }));
    };

    const handleFilter = () => {
        setDataFilter([...dataFilter].filter((data) => {
            return data.genre.includes('Drama');
        }));
    };

    const handleSortGenre = () => {
        setDataFilter([...dataFilter].sort((a, b) => {
            if (a.genre < b.genre) {
                return -1;
            } else if (a.genre > b.genre) {
                return 1;
            }
            return 0;
        }));
    };

    const handleSearchGenre = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchGenre(searchValue);
    
        const filteredMovies = Data.filter((movie) =>
          movie.genre.some((genre) => genre.toLowerCase().includes(searchValue))
        );
    
        setDataFilter(filteredMovies);
      };
  
    return (
        <>
        <article className='filter-container'>
            <div>
                <button onClick={handleAtoZ}>A-Z</button>
                <button onClick={handleZtoA}>Z-A</button>
                <button onClick={handleRateDown}>Rating</button>
                <button onClick={handleYearUp}>Jahr auf</button>
                <button onClick={handleYearDown}>Jahr ab</button>
                <button onClick={handleSortGenre}>Sort Genre</button>
            </div>
            <div>
                <input type="text" value={searchGenre} onChange={handleSearchGenre} placeholder='Nach Genre filtern' />
                {/* <button onClick={handleFilter}>Filter Genre</button> */}
            </div>
        </article>

        <article className='movie-container'>
            {dataFilter.map((el, i) => {
                return (
                        <MovieItem 
                        key={i}
                        title={el.title}
                        year={el.year}
                        director={el.director}
                        duration={el.duration}
                        genre={el.genre}
                        rate={el.rate}
                        />
                )
            })}
        </article> 
        </>

    );
  };

  export default MovieList;