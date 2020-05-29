import React, {Component} from 'react';
import {API_URL, API_KEY} from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css'

class Movie extends Component {
    state = {
        // properties we need
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    componentDidMount(){
        this.setState({loading: true})
        // first fetch movies...
        // we created a movie variable in d v=browser router which enables us get access to this movie id expression
        const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint)
    }

    fetchItems (endpoint) {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result)
            if(result.status_code){
                this.setState({loading: false})
            }else{
                // if theres a movie display it. 
                // inother to grab d actors setState also accepts a callback function so can call a function after setState is set inother to  grab d movie befor grabing d actors
                this.setState({movie: result}, () => {
                    // ... fetch actors in the setState callback function
                    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`
                    fetch(endpoint)
                    .then(result => result.json())
                    .then(result => {
                        const directors = result.crew.filter((member) => member.job === 'Director')
                        this.setState({
                            actors: result.cast,
                            directors,
                            loading: false 
                        })
                    })
                })
            }
        })
        .catch(e => console.error('Error:', e))
    }
    render(){
        return(
            <div className="rmdb-movie">
               {this.state.movie ? 
                    <div>
                        <Navigation movie={this.props.location.movieName} />
                        <MovieInfo movie={this.state.movie} directors={this.state.directors} />
                        <MovieInfoBar time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue} />
                    </div>
                : null }
                {/* seperate tenary operator coz we want to show d movie info b4 loading d actors */}
                {this.state.actors ?
                    <div className="rmdb-movie-grid">
                        <FourColGrid  header={'Actors'}>
                        {/* for each actor in d array we create an actor element n send it to d FourColgrid */}
                       
                        {this.state.actors.map((element, i) => {
                            return <Actor key={i} actor={element} />
                        })}
                        </FourColGrid>
                    </div>
                    : null }
                    {/* if we dont v actors n not loading anything(no movie) return page not found */}
                    {!this.state.actors && !this.state.loading ? <h1>No Movie Found!</h1> : null}
                    {this.state.loading ? <Spinner /> : null}
                }
               
            </div>
        )
    }
}

export default Movie;