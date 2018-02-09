$(document).ready(function() {
    
    // set up api
    var giphy_api = 'http://api.giphy.com/v1/gifs/',
        search_path = 'search?q=',
        trending_path = 'trending?',
        api_key = 'ZaUGDYTJCpyogZpqYi4Yr0FMoXLFBB6G',
        queryURL = giphy_api + trending_path + '&api_key=' + api_key,
        gif_urls = [];

    // function for injecting the gifs into the html
    function injectImages(urls){
        var gifContainer = $('#gifs');
        
        // clear out any old images
        gifContainer.empty();
        
        // inject new images
        $.each(urls, function(index) {
            gifContainer.append('<li><img src="' + urls[index] + '"></li>');
        });
    }
    
    
    // initial ajax request to the api (returns trending gifs)
    $.ajax({
        url: queryURL,
        type: 'GET',
        success: function(response) {

            $.each(response.data, function(index, current) {
                gif_urls.push(current.images.original.url);
            });

            injectImages(gif_urls);
        }
    });
    
    console.log(queryURL);
    
    $('#search').click(function(){
        var new_gif_urls = [],
            path = search_path,
            query = 'funny+cat',
            queryURL = giphy_api + path + query + '&api_key=' + api_key;
        
        
        // search ajax request to the api
        $.ajax({
            url: queryURL,
            type: "GET",
            success: function(response) {
                
                $.each(response.data, function(index, current) {
                    new_gif_urls.push(current.images.original.url);
                });
                
                injectImages(new_gif_urls);
            }
        });
        
        console.log(queryURL);

    });
});

// consolidate ajax request into single function
// output tags underneath image
// make actual iframe not scrollable, but container that holds the gifs scrollable
// so can put the search bar at the bottom of the iframe

