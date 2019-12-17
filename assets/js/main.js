$(document).ready(function(){
    //Button and description - needs to be hidden first??
    $('#expand').click(function(){
        $('#description').slideDown(3000);
    });
    $('#expand').click(function(){
        $('#description').slideUp(3000);
    });
    $('#expand').click(function(){
        $('#description').slideToggle(3000);
    });

    //Input box - catch submission and take value into variable
    $('input').focus(function(){
        $(this).css('background', 'lightgrey');
    });
    $('input').blur(function(){
        $(this).css('background', 'white');
    });
    $('input').keyup(function(e){
        console.log(e.target.value);
    });
    $('#searchFor').submit(function(e){
        e.preventDefault();
        var film = $('input#film').val();
        console.log(film);
        fetchMovie(film).then((result) => console.log(result));
    });
});

//trying to reach out to API to get data
const APIKEY = '8d72c04338897f51da8771905f89a242';
const baseURL = 'https://api.themoviedb.org/3/';

let getConfig = function(){
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
        .then((result) => {
            return result.json();
        })
    };

function fetchMovie(movie) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movie}`;
    return fetch(url)
        .then((result) => {
            return result.json();
        });
}

document.addEventListener('DOMContentLoaded', getConfig);