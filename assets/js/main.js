$(document).ready(() => {
    $('#searchBox').on('submit', (e) => {
        console.log($('#textInput').val());
        e.preventDefault();
    })
});