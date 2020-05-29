import React from 'react';
import {IMAGE_BASE_URL} from '../../../config';
import './Actor.css';

const Actor = (props) => {
    // override poster size
    const POSTER_SIZE = "w154";

    return (
        <div className="rmdb-actor">
            <img 
                src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './images/no_images.jpg'}
                alt="actorthumb"
            />
            <span className="rmdb-actor-name">{props.actor.name}</span>
            <span className="rmdb-actor-character">{props.actor.character}</span>
        </div>
    )
}

export default Actor;