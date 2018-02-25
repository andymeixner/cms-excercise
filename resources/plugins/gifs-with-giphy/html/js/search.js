$(document).ready(function() {

  // declare input and put users cursor into it
  var input = $('#search-input');
  input.focus();

  // set up api and create empty arrays for gif urls and gif ids
  var giphy_api = 'http://api.giphy.com/v1/gifs/',
      search_path = 'search?q=',
      trending_path = 'trending?',
      api_key = 'ZaUGDYTJCpyogZpqYi4Yr0FMoXLFBB6G',
      queryURL = giphy_api + trending_path + '&api_key=' + api_key,
      gif_urls = [],
      gif_ids = [];

  // function for injecting the gifs into the html and setting up variables for inserting into the editor
  function injectImages(urls, ids){
    var gifContainer = $('#gifs');

    // clear out any old images
    gifContainer.empty();

    // inject new images
    $.each(urls, function(index) {
        gifContainer.append('<li class="gif" data-id="' + ids[index] + '"><img src="' + urls[index] + '"></li>');
    });

    // handle gif click events
    $('.gif').each(function(){
      $(this).click(function(){
        var gifURL = $(this).children('img').attr('src'),
            htmlToInsert = '<img class="giphy-gif" src="' + gifURL + '">';

        // call function that inserts the html into the editor and closes the window
        insertGif(htmlToInsert);
      });
    });
  }

  // initial ajax request to the api (returns trending gifs)
  // api request returns json data (response)
  // loop over the response passing the index of the iteration and the current iteration
  // push the data I want to use (url and id of each gif) into the arrays (gif_urls[] and gif_ids[])
  // call the inject images function passing the urls and ids arrays (actually adds the html to the DOM)
  $.ajax({
    url: queryURL,
    type: 'GET',
    success: function(response) {
      $.each(response.data, function(index, current) {
        gif_urls.push(current.images.original.url),
        gif_ids.push(current.id);
      });

      injectImages(gif_urls, gif_ids);
    }
  });

  // run a new ajax request on search
  // same thing as initial api request, just passes a query string based on the search vs 'trending'
  $('#search-button').click(function(){
    var newQuery = input.val(),
        //format query so it works in the api request url
        formattedQuery = newQuery.split(' ').join('+');
        new_gif_urls = [],
        new_gif_ids = [],
        path = search_path,
        queryURL = giphy_api + path + formattedQuery + '&api_key=' + api_key;

    // search ajax request to the api
    $.ajax({
      url: queryURL,
      type: "GET",
      success: function(response) {
        $.each(response.data, function(index, current) {
          new_gif_urls.push(current.images.original.url),
          new_gif_ids.push(current.id);
        });

        injectImages(new_gif_urls, new_gif_ids);
      }
    });

    // clear search value
    input.val('');
  });

  // trigger search button click event with enter button
  $('#search-input').keypress(function(e){
    if(e.which == 13){//Enter key pressed
      $('#search-button').click();
    }
  });

  // function for inserting image html into the tinymce editor once a user clicks on a gif
  function insertGif(imgHtml){
    // insert htmlToInsert
    parent.tinyMCE.activeEditor.execCommand('mceInsertRawHTML', false, imgHtml);
    // close window windowManager
    parent.tinyMCE.activeEditor.windowManager.close(window);
  }
});
