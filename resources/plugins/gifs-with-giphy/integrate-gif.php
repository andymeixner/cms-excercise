<?php
/**
* Plugin Name: Gifs with GIPHY
* Plugin URI:
* Description: A plugin for integrating gifs to posts
* Version: 1.0
* Author: Andy Meixner
**/

// Hook in main plugin css - just specifies the icon to use for the button
function integrate_gif_css() {
  wp_enqueue_style( 'integrate-gif', plugins_url( 'css/integrate-gif.css', __FILE__ ) );
}
add_action( 'admin_enqueue_scripts', 'integrate_gif_css' );

// Main plugin function
function integrate_gif_main() {
  global $typenow;

  // check the current user's permissions
  // specifically if the user can't edit posts are pages, don't go any farther
  if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
    return;
  }

  // verify that the user is editing a post or a page
  // if not editing a post or page, don't go any farther
  if ( !in_array( $typenow, array('post', 'page') ) ) {
    return;
  }

  // check if WYSIWYG is enabled
  // mce plugin filters
  // - call function that adds the js file to the TinyMCE plugin array
  // - call function that adds the new button to the TinyMCE buttons array
  if ( get_user_option('rich_editing') == 'true' ) {
    add_filter( 'mce_external_plugins', 'integrate_gif_add_tinymce_plugin' );
    add_filter( 'mce_buttons', 'integrate_gif_register_button' );
  }
}

// Add main plugin function to wp-admin head
add_action('admin_head', 'integrate_gif_main');

// Add integrate-gif.js file to the TinyMCE plugin array
function integrate_gif_add_tinymce_plugin( $plugin_array ) {
  $plugin_array['integrate_gif_plugin'] = plugins_url( '/js/integrate-gif.js', __FILE__ );
  return $plugin_array;
}

// Add new button to the TinyMCE buttons array
function integrate_gif_register_button( $buttons ) {
  array_push( $buttons, 'add_gif_button' );
  return $buttons;
}
