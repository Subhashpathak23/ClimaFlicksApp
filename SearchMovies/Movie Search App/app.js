const apikey = "6b305610";


let search = document.querySelector("#search");
let input = document.querySelector(".search-bar input");
let poster = document.querySelector(".movie-poster img");
let title = document.querySelector(".movie-details .title");
let rating = document.querySelector(".movie-details .rating");
let genre = document.querySelector(".genre-buttons");
let releasedDate = document.querySelector(".released-date");
let duration = document.querySelector(".duration");
let cast = document.querySelector(".cast");
let plot = document.querySelector(".plot");
let hide = document.querySelector(".hide");
let developer = document.querySelector(".developer");

let splitGenre = async(data)=>{
    let genreArr = (data.Genre).split(" "); 
    console.log(genreArr, "size is", genreArr.length);
   
    for(let val in genreArr){
        let el = document.createElement("button")
        el.innerText = genreArr[val];
        genre.prepend(el);
    }
}

let URL = "";



search.addEventListener("click", async ()=>{
URL = `http://www.omdbapi.com/?apikey=${apikey}&t=${input.value}`;
let response = await fetch(URL);
let data = await response.json();
poster.src = data.Poster;
title.innerText = data.Title;
rating.innerText = `Rating: ⭐ ${data.imdbRating}`;
splitGenre(data);
releasedDate.innerText = data.Released;
duration.innerText = data.Runtime;
cast.innerText = data.Actors;
plot.innerText = data.Plot;
hide.classList.remove("hide");
developer.classList.add("devloper-hider");
});


