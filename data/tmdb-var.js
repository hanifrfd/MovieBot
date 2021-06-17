export let baseUrl = "https://api.themoviedb.org/3";
export let imgUrl  = "https://image.tmdb.org/t/p/original";
export let APIKey  = "ec4bdffc57939748a8ae19503628e514";

class EndPoint {

    static PopularMovie(request_type) {
        `${baseUrl}/trending/${request_type}/movie/week?api_key=${APIKey}`;
    };

    static PopularTv(request_type) {
        `${baseUrl}/movie/${request_type}?api_key=${APIKey}/&language=en-US&page=1`;        
    };

    static Trailer(request_type) {
        `${baseUrl}/movie/${request_type}?api_key=${APIKey}/&language=en-US&page=1`;        
    };

    static NewMovie(request_type) {
        `${baseUrl}/movie/${request_type}?api_key=${APIKey}/&language=en-US&page=1`;        
    };

    static NewTv(request_type) {
        `${baseUrl}/movie/${request_type}?api_key=${APIKey}/&language=en-US&page=1`;        
    };
};

export default EndPoint;