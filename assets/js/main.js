$(document).ready(function(){
    //Button and description - needs to be hidden first??
    $('#expand').click(function(){
        $('#description').slideDown(1000);
    });
    $('#expand').click(function(){
        $('#description').slideUp(1000);
    });
    $('#expand').click(function(){
        $('#description').slideToggle(1000);
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
        let choice = $('input#film').val();
        console.log(choice);
        fetchMovie(choice).then((result) => console.log(result));
    });
});

//trying to reach out to API to get data
const APIKEY = '8d72c04338897f51da8771905f89a242';
//const baseURL = 'https://api.themoviedb.org/3/';

let getConfig = function(){
    let url = `https://api.themoviedb.org/3/configuration?api_key=${APIKEY}`;
    fetch(url)
        .then((result) => {
            return result.json();
        })
    };

function fetchMovie(choice) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${choice}`;
    return fetch(url)
        .then((result) => {
            return result.json();
    });

    /*
    let films =
    
    let output = 

    });

    $('#data').html(output);
    */
};

document.addEventListener('DOMContentLoaded', getConfig);