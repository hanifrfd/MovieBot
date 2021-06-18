import {useRouter} from 'next/router'
import useSWR from 'swr'
const fetcher = url => fetch(url).then(r => r.json())


export const getSearch = (keyword) => {    
    const {data : search, error} = useSWR(`https://api.themoviedb.org/3/search/multi?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&query=${keyword}&page=1&include_adult=true`,fetcher);
    const datas = `https://api.themoviedb.org/3/search/multi?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&query=${keyword}&page=1&include_adult=true`;
    return {search, error, datas};
};

