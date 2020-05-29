import React, { Component } from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';
// import { render } from '@testing-library/react';

class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''

    }

    componentDidMount(){
        this.setState({loading: true});
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint)
    }
    //to be sent to searchBar component
    searchItems = (searchTerm) => {
        console.log(searchTerm)
// 2 endpoints first- if not searching for anything or user deletes its search it should go back to original state and show movies
        let endpoint = '';
        this.setState({
            movies: [], //if searching let d movies to clear and just show that what was searched for
            loading: true, //show loading spinner
            searchTerm 
        })
        if(searchTerm === ''){
            // if search is empty lod popular movies
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }else{
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`
        }
         this.fetchItems(endpoint)   
    }

    //method for loadmore items
    loadMoreItems = () => {
        //two endpoints needed coz when searching should show more searched movies if not load popular movies
        let endpoint = '';
        this.setState({loading: true});
        if(this.state.searchTerm === ''){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        }else{
            endpoint = `${API_URL}search/movie?api_key${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        //call the fetch item method which will fetch d next page on d loadmorebtn
        this.fetchItems(endpoint)
        console.log(endpoint)
    }
   

    //building the first method
    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result)
            this.setState({
                movies: [...this.state.movies, ...result.results],  // keep old movies whiles loading new movies on page(appending old movies to new movies)
                heroImage: this.state.heroImage || result.results[0],  // if heroimage is null(doesnt exist) replace with first image from movie result
                loading: false, //because we're not fetching more data
                currentPage: result.page,
                totalPages: result.total_pages
            })
            
        })
    }

    render(){
        return(
            <div className="rmdb.home">
                
                {this.state.heroImage ? //check if heroImage exist otherwise retun nothin
                <div>
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                        title={this.state.heroImage.original_title}
                        text={this.state.heroImage.overview}
                    />
                    <SearchBar callback={this.searchItems}/>
                </div> : null }
               <div className=" rmdb-home-grid">
                   {/* select a header based of if doing search or showing ppl movi */}
                    <FourColGrid
                        header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
                        // show loding if loading or not
                        loading={this.state.loading} 
                        
                    >
                    {this.state.movies.map((element, i) => {
                        return <MovieThumb
                                    key={i}
                                    // clickble enables a user to click on an img n go to the movi detail page
                                    clickable={true} 
                                    image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                    // movi id for accesing individual moviz
                                    movieId={element.id}
                                    movieName={element.original_title}
                                />
                    })}
                    {/* fourColgrid has closing tag bcos children(moviThumb) are been passed into it */}
                    </FourColGrid> 
                    {/* when to show loadmorebtn and spinner */}
                    {this.state.loading ? <Spinner /> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                    <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} /> : null
                    }
               </div>
            </div>
        )
    }
}



export default Home;