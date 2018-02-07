var value = 'Testing variable input';

(function() {
    tinymce.PluginManager.add('integrate_gif_plugin', function( editor, url ) {
    
        // example of a text label button
        editor.addButton( 'add_gif_button', {
            title: 'Add Gif',
            icon: 'icon giphy-icon',
            value: value,
            onclick: function() {
                editor.insertContent(this.value());
            }
            
        });
    });
})(); 