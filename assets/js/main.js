//Buttons
$(document).ready(function(){
    $('input').focus(function(){
        //alert('Focus');
        $(this).css('background', 'grey');
    });
    $('input').blur(function(){
        //alert('Focus');
        $(this).css('background', 'white');
    });
    $('input').keyup(function(e){
        console.log(e.target.value);
    });
});

//trying to request data from API
const APIKEY = '8d72c04338897f51da8771905f89a242';
const baseURL = 'https://api.themoviedb.org/3/';

let getConfig = function(){
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
        .then((result) => {
            return result.json();
        })
    };

document.addEventListener('DOMContentLoaded', getConfig);