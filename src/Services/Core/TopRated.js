import { APIKEY } from "../Config";



const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${APIKEY}`,
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  },
};

export const TopRated = async () => {
 let value= await fetch(
    "https://imdb-top-100-movies.p.rapidapi.com/",
    options
  )
    
let result=await value.json();
return result
};


