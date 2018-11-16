$(document).ready(function(){

$(`form`).on(`submit`, function(e) {
e.preventDefault();

var searchInput = $(`.gif-input`).val();
var key = $(`input[type="hidden"]`).val();
var giffyUrl = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchInput}`;

$.ajax({
    url: giffyUrl,
    method: `GET`,
    success: function(response) {
        response.data.forEach(gif => { console.log(gif);
            var elem = `<img src=${gif.images.original.url} alt=${gif.title}/>`
            $(`.gif-gallery`).append(elem);
        })
    },
    error: function() {
        console.log(`There is an error`);
    }
})
})
});
