$(document).ready(function(){
    let configuration = null;
    getConfiguration().then(result => {
        configuration = result;
        console.log(configuration);
    });
    
    //Button and description
    $('#expand').click(function(){
        $('.hidden_div').slideDown(2000);
    });

    //Input box
    $('input').focus(function(){
        $(this).css('background', 'lightgrey');
    });
    $('input').blur(function(){
        $(this).css('background', 'white');
    });
    $('input').keyup(function(e){
        console.log(e.target.value);
    });

    //Catch submission
    $('#searchFor').submit(function(e){
        e.preventDefault();
        let choice = $('input#film').val();
        console.log(choice);
        fetchMovie(choice).then((result) => {
            console.log(result);
            var container = document.getElementById('data'); 
            for (let movie of result.results) {
                // console.log(movie);
                container.innerHTML += renderMovie(movie, configuration);
            }
        });
    });
});

//Reach out to API to get data
const APIKEY = '8d72c04338897f51da8771905f89a242';
//const baseURL = 'https://api.themoviedb.org/3/';

function getConfiguration(){
    let url = `https://api.themoviedb.org/3/configuration?api_key=${APIKEY}`;
    return fetch(url)
        .then((result) => {
            return result.json();
        })
    };

function fetchMovie(choice, page) {
    page = (typeof page !== 'undefined') ? page : 1;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${choice}&page=${page}`;
    return fetch(url)
        .then((result) => {
            return result.json();
        });
};

function renderMovie(movie, configuration) {
    var url = (movie.poster_path !== null) ? 
        `${configuration.images.base_url}${configuration.images.poster_sizes[2]}${movie.poster_path}`: '';
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

//function renderPagination(result) {
//   <nav aria-label="Search results pages">
//      <ul class="pagination justify-content-center">
//          <li class="page-item">
//              <a class="page-link" href="#" aria-label="Previous">
//                  <span aria-hidden="true">&laquo;</span>
//              </a>
//          </li>
//          <li class="page-item"><a class="page-link" href="#">1</a></li>
//          <li class="page-item"><a class="page-link" href="#">2</a></li>
//          <li class="page-item"><a class="page-link" href="#">3</a></li>
//          <li class="page-item">
//              <a class="page-link" href="#" aria-label="Previous">
//                  <span aria-hidden="true">&laquo;</span>
//              </a>
//          </li>
//      </ul>
//    </nav>
//}