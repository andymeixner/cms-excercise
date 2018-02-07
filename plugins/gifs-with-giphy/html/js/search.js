$(document).ready(function() {
    // search functionality here
    var giphy_api = 'http://api.giphy.com/v1/gifs/search?q=',
        api_key = 'ZaUGDYTJCpyogZpqYi4Yr0FMoXLFBB6G',
        query = 'funny+cat',
        queryURL = giphy_api + query + '&api_key=' + api_key;

    function injectImages(urls){
        $('#gifs').append('<li><img src="' + urls[1] + '"></li>');
    }
    
    $('#search').click(function(){
        var gif_urls = [];
        
        $.ajax({
            url: queryURL,
            type: "GET",
            success: function(response) {
                
                $.each(response.data, function(index, current) {
                    gif_urls.push(current.images.original.url);
                });
                
                injectImages(gif_urls);
            }
        });

    });
});
