(function() {
  tinymce.PluginManager.add('integrate_gif_plugin', function( editor, url ) {

    // add main gif button
    editor.addButton( 'add_gif_button', {
      title: 'Add Gif',
      icon: 'icon giphy-icon',

      // open a modal on button click
      onclick: function() {
        var modalw = 480;
        var modalh = 548;

        // load the integtrate-gif html in an iframe in the windowManager
        editor.windowManager.open({
          file: url + '/../html/integrate-gif.html',
          width : modalw,
          height : modalh,
          inline : true,
          resizable: false,
          scrollbars: false,
          classes: 'gif-modal'
        });
      }
    });
  });
})();
