import {useParams, Link} from 'react-router-dom'
import Data from '../components/Data'

const MovieDetail = () => {
    const params = useParams()

    const detail = Data.filter((movie) => {
        return movie.title === params.title
    });

    return (
        <>
                <section className='single-movie'>
            <article className="movie">
                <h2>{detail[0].title}</h2>
                <h2>{detail[0].year}</h2>
                <h2>{detail[0].director}</h2>
                <h2>{detail[0].duration}</h2>
                <h2>{detail[0].rate}</h2>
                    <div className="genre">
                        {detail[0].genre.map((el, i) => {
                            return (
                                <p key={i}>{el}</p>
                        )})}
                    </div>
            </article>
                    </section>
                    <Link to={'/'}>Back Home</Link>
        </>





    );
};

export default MovieDetail;