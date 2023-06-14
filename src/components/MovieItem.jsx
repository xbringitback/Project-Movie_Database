const MovieItem = (props) => {
    return (
    <div className="movie">
        <h2>{props.title}</h2>
        <h2>{props.year}</h2>
        <h2>{props.director}</h2>
        <h2>{props.duration}</h2>
        <h2>{props.rate}</h2>
        {/* <p>{props.genre}</p> */}
        <div className="genre">
            {props.genre.map((el, i) => {
                return (
                    <p key={i}>{el}</p>
                )})}
        </div>

    </div>
    );
};

export default MovieItem;

