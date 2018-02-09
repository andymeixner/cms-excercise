(function() {
  tinymce.PluginManager.add('integrate_gif_plugin', function( editor, url ) {

    // add main gif button
    editor.addButton( 'add_gif_button', {
      title: 'Add Gif',
      icon: 'icon giphy-icon',
      onclick: function() {
        var modalw = 480;
        var modalh = 548;

        // open the gif search plugin in window manager
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
