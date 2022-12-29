export const SearchAPI = async (search="naruto") => {
  await fetch(
    `https://api.jikan.moe/v4/anime?q=${search}&sfw`
  )
 .then(res=>res.json())
 .then((data)=>console.log(data))

};
