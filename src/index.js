import { getMovieReviewData } from "./data.js";


function init(){
    const movieReviewData = getMovieReviewData()
    paintStatistics(movieReviewData)
    paintMovieData(movieReviewData)
}

// Paint Statistics
function paintStatistics(movieReviewData){
    const flatReviewData = movieReviewData.flat()
    const totalMovies = movieReviewData.length
    const totalReviews = flatReviewData.length

    const totalRating = flatReviewData.reduce((acc, item) =>{
        return acc + item.rating
    }, 0)
    const avgRating = (totalRating / flatReviewData.length).toFixed(2) 

    const totalMoviesEl = document.getElementById("tMoviesId")
    addStat(totalMoviesEl, totalMovies)

    const totalReviewEl = document.getElementById("tReviewsId")
    addStat(totalReviewEl, totalReviews)

    const avgRatingEl = document.getElementById("tAvgRatingId")
    addStat(avgRatingEl, avgRating)

}

function addStat(elem, value){
    const spanEl = document.createElement("span")
    spanEl.classList.add("text-3xl")
    spanEl.innerText = value
    elem.appendChild(spanEl)
}




// Paint Movie Data
function paintMovieData (movieReviewData) {
    
    const flatReviewData = movieReviewData.flat()

    // Movie Reviews
    const reviewUlEl = document.getElementById("reviewUl")
    const movieListEl = document.querySelector("#movieListId ul")
    flatReviewData.map((movie) => {
        // Creating li Element
        const liElem = document.createElement("li")
        liElem.classList.add("card", "my-2", "py-2")

        // Title Element
        const titleElem = document.createElement("p")
        titleElem.classList.add("text-xl", "mb-2")
        titleElem.innerText = `${movie.title} - ${movie.rating}`
        liElem.appendChild(titleElem)

        // Review content element
        const contentElem = document.createElement("p")
        contentElem.classList.add("mb-2", "mx-2")
        contentElem.innerText = `${movie.content}`
        liElem.appendChild(contentElem)


        // Review author and date element
        const dateElem = document.createElement("p")
        dateElem.classList.add("mb-2", "mx-2")
        dateElem.innerText = `By ${movie.by} - On ${new Intl.DateTimeFormat('en-BD').format(movie.on)}`
        liElem.appendChild(dateElem)

        movieListEl.appendChild(liElem)
    })
}

init()



