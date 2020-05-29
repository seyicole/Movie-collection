import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {
    const renderElements = () => {
        // sending in d thumbnails as children
        const gridElements = props.children.map((element, i) => {
            return (
                <div key={i} className="rmdb-grid-element">
                    {element}
                </div>
            )
        })
        return gridElements;
    }

    return(
        <div className="rmdb-grid">
            {/* if header present n noth loading anything display h1 header else show nothing */}
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content">
                {/* show thumbnails(movie photos) */}
                {renderElements()} 
            </div> 
        </div>
    )

}

export default FourColGrid;