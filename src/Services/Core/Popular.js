import { APIKEY } from "../Config";
import React, { createContext, useState } from "react";

export const PopularProvider=createContext()

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${APIKEY}`,
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

export const PopularService = async () => {
 let value= await fetch(
    "https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US",
    options
  )
    
let result=await value.json();
return result
};


