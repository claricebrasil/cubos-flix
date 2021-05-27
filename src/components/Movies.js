import React from "react";
import { ReactComponent as Star } from "../images/star.svg";
import { ReactComponent as GoldenStar } from "../images/golden-star.svg";


function Movies(props) {
    const background = `url('${props.backgroundImg}') no-repeat center/cover`; 

    return (
         <div className="movie" style={{ background }}>
            <Star className={`star ${props.isStarred ? 'active' : ''}`} onClick={() => props.handleClick(props.title)} />
            <div className="movie-info">
                <h3>{props.title}</h3>
                <div className="movie-stars">
                    <GoldenStar className="golden-star" />
                    {props.starsCount}
                </div>
            </div>
            <button className="bag" onClick={() => props.handleMovieInBag(props.title, props.backgroundImg, props.price)}>Sacola
                <span className="bag-price">R$ {props.price}</span>
            </button>
        </div>
    );
}

export default Movies;