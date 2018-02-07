(function() {
    tinymce.PluginManager.add('integrate_gif_plugin', function( editor, url ) {
    
        // example of a text label button
        editor.addButton( 'add_gif_button', {
            title: 'Add Gif',
            icon: 'icon giphy-icon',
            onclick: function() {
                var modalw = 480;
                var modalh = 548;
                
                editor.windowManager.open({
                    file: url + '/../html/integrate-gif.html',
                    width : modalw,
                    height : modalh,
                    inline : true,
                    resizable: false,
                    scrollbars: false,
                    classes: 'gif-modal'
                   /* onsubmit: function( e ) {
                        editor.insertContent( 'This is your whatever: ' + e.data.text + ' ' + e.data.text2 );
                    }*/
                });
                
            }
           /* onclick: function() {
                editor.windowManager.open( {
                    title: 'Insert Whatever',
                    body: [
                    {
                        type: 'textbox',
                        name: 'text',
                        label: 'Whatever'
                    },
                    {
                        type: 'textbox',
                        name: 'text2',
                        label: 'Moar Whatever'
                    }],
                    onsubmit: function( e ) {
                        editor.insertContent( 'This is your whatever: ' + e.data.text + ' ' + e.data.text2 );
                    }
                });
            }*/
            
        });
    });
})();
