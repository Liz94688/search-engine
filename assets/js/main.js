//Buttons
$(document).ready(function(){
    //About Section - further information (not quite right - don't want the p showing upon entry to site)
    $('#moreorless').on('mouseenter', function(){
        $('.description').show();
    })
    $('#moreorless').on('mouseleave', function () {
        $('.description').hide();
    })
    //when the button is clicked I want to grab the info from the #film input and pass it...where?
    $('#clicked').click(function(){
         $('#film'.innerHTML);
    });
})

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