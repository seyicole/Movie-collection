import React from 'react';
import {Link} from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return(
        <div className="rmdb-moviethumb">
            {/* theres a prop called clickable - set it to be true/false if u want it clickable */}
            {props.clickable ?
            // double curly braces becaus its an object bin created
            <Link to={{pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
                <img src={props.image} alt="moviethumb" />
               
            </Link>
            :
            <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

export default MovieThumb;