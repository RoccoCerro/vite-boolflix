import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  movie: {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
    query: ''
  },

  tv: {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
    query: ''
  },

  movieNowPlaying: {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
  },

  castMovie:{
    cast: [],
    crew: [],
    id: 0,
  },

  genres: {},

  calledNowPlaying(){
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=0e75ad5772cce745dda6b939d03ca9de&language=it_IT&page=1'  
      )
      .then((res)=>{
        this.movieNowPlaying.results = res.data.results
        this.movieNowPlaying.page = res.data.page
        this.movieNowPlaying.total_pages = res.data.total_pages
        this.movieNowPlaying.total_results = res.data.total_results
        
        console.log('Risultato ultime uscite', this.movieNowPlaying.results)
      })
  },

  calledMovieCastServer(){
    let movieId = 0;

    this.movie.results.forEach(element => {
      movieId = element.id
    });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0e75ad5772cce745dda6b939d03ca9de`
      )
      .then((res)=>{
        this.castMovie.cast = res.data.cast.splice(0,5);
        this.castMovie.crew = res.data.crew;
        // this.castMovie.id = red.data.id;
        console.log('Risultato cast', this.castMovie.cast);
      })
  },

  calledGenreMovieList(){
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list?api_key=0e75ad5772cce745dda6b939d03ca9de')
      .then((res)=>{
        const genres = res.data.genres;
        const genresMap = {};
        for (let i = 0; i < genres.length; i++) {
          const genre = genres[i];
          genresMap[genre.id] = genre.name;
        }
        console.log(genresMap);
        this.genres = genresMap;
        //console.log(res)
    })
  },
})