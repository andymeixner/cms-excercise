# CMS Exercise for Eaze
This completed exercise includes the following:
- A Wordpress Plugin called "Gifs with Giphy" that allows writers to add gif's directly from the Wordpress editor. This Plugin is located at root/resources/gifs-with-giphy/. Please place the entire plugin directory into the plugins directory of your local Wordpress instal located at root/wp/wp-content/plugins. Then be sure to activate it.
- A simple React app that displays the Wordpress posts via the Wordpress REST API. This app is located at root/frontend. The app can be launched using `npm start`. Be sure to run `npm update` before you try to run the app, as I have added more dependencies to the package.json. The app is set up to send GET requests to a Wordpress install at 'localhost:8888'

## Future Frontend Updates
The Following are potential future updates to the Frontend React app
- Pagination.
  - The current app just requests all (up to 100) posts from the Wordpress install. Pagination would allow for quicker load times, and allow for more than 100 posts to be displayed in the app.

## Future Plugin Updates
The Following are potential future updates to the Gifs with Giphy plugin
- Options Page.
  - Add an options page for the plugin in the Wordpress admin panel. This options page would allow more customization of the gif's the user receives (i.e. gif rating) as well as the desired output format of the gif (i.e. iframe embed vs. image).
