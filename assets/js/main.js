$(document).ready(function() {
    let container = document.getElementById('data');
    let configuration = null;
    getConfiguration().then(result => {
        configuration = result;
        console.log(configuration);
    });
    
    //Button and description
    let aboutLabel = $('#expand');
    let divEl = $('.hidden_div');
    aboutLabel.hover(() => { divEl.show(2000); });
    aboutLabel.mouseleave(() => { divEl.hide(2000); });

    //Input box
    let inputText = $('#film').focus(function() {
        $(this).css('background', 'lightgrey');
    });

    inputText.blur(function() {
        $(this).css('background', 'white');
    });

    //Input film choice, record value, fetch movie, manage results
    inputText.keyup(_.debounce(function(e) {
        console.log(e.target.value);
        let choice = e.target.value;
        fetchMovie(choice).then((response) => {
            console.log(response);
            container.innerHTML = '';
            if (response.hasOwnProperty('results') && response.results.length) {
                for (let movie of response.results) {
                    container.innerHTML += renderMovie(movie, configuration);
                }
            }
            else {
                container.innerHTML += renderMessage('There is no result based on your current query.');
            }
        });
    }, 200));
});

//Reach out to API to get data
const APIKEY = '8d72c04338897f51da8771905f89a242';

function getConfiguration(){
    let url = `https://api.themoviedb.org/3/configuration?api_key=${APIKEY}`;
    return fetch(url)
        .then((result) => {
            return result.json();
        })
};

//Pass in movie choice and return results
function fetchMovie(choice, page) {
    page = (typeof page !== 'undefined') ? page : 1;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${choice}&page=${page}`;
    return fetch(url)
        .then((result) => {
            return result.json();
        });
};

//Render results in card format
function renderMovie(movie, configuration) {
    var url = (movie.poster_path !== null) ? 
        `${configuration.images.base_url}${configuration.images.poster_sizes[2]}${movie.poster_path}`: 'assets/images/image_unavailable.jpeg';
    const movieCardTpl = `
        <div class="card card-style">
            <img src="${url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.overview}</p>
            </div>
        </div>`;
    return movieCardTpl;
}

//Render message if request does not return a result
function renderMessage(message) {
    return `<div class="inner"><p class="message">${message}</p></div>`;
}