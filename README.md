# CMS Exercise for Eaze
This completed exercise includes the following:
- A Wordpress Plugin called "Gifs with Giphy" that allows writers to add gif's directly from the Wordpress editor. This Plugin is located at root/resources/gifs-with-giphy/. Please place the entire plugin directory into the plugins directory of your local Wordpress instal located at root/wp/wp-content/plugins. Then be sure to activate it.
- A simple React app that displays the Wordpress posts via the Wordpress REST API. This app is located at root/frontend. The app can be launched using `npm start`. Be sure to run `npm update` before you try to run the app, as I have added more dependencies to the package.json. The app is set up to send GET requests to a Wordpress install at 'localhost:8888'

## General Exercise Notes
All in all I think this went pretty well. It's not a very exciting design but the functionality is there. There was a bit of a learning curve I had to overcome (this was my first time using React). I spent some time in a Udemy React course to get my feet wet before jumping in. I'm happy with it as a v1.0.0, but would definitely spend a lot more time on the frontend of both the app and the plugin if this was going to go to production. I'm sure there are a lot of places in my javascript where I could be more efficient (I duplicated a few api calls, and in general could consolidate a few functions) - but given this was my first time with React I was just trying to get it to work. The thing I had the most issues with was with the React Router - took a bit of time to get the post/some-id routes to work correctly (and this is where I ended up duplicating the Wordpress API call because I couldn't figure out how to pass the current post prop through the Link). Anyway, hope this gives you a good idea on my technical abilities - definitely not a master programmer, but I'm a quick learner and I truly enjoy doing this stuff!

## Future Frontend Updates
The Following are potential future updates to the Frontend React app
- Either load more posts as user scrolls or Pagination.
  - The current app just requests all (up to 100) posts from the Wordpress install. These would allow for quicker initial load times, and allow for more than 100 posts to be displayed in the app.
- Integrate ACFs & ACF to REST-API plugins for easy user control over the rest of the frontend (Headlines, Header Images, Footer etc...)
- Show feature image is the background image of the header (if post has one)
- More exciting design, currently it is more or less just a boilerplate template
- Next and Previous Post buttons (currently just have an All Posts button to go back to /)
- Add a post excerpt (truncated) to the post preview

## Future Plugin Updates
The Following are potential future updates to the Gifs with Giphy plugin
- Options Page.
  - Add an options page for the plugin in the Wordpress admin panel. This options page would allow more customization of the gif's the user receives (i.e. gif rating) as well as the desired output format of the gif (i.e. iframe embed vs. image).
- Allow for user to select display/position settings of gif (currently just centers it)
- Output gif title and/or gif tags underneath gif when searching for gifs

## Known Bugs
- Encoded html entities in rendered content output not working properly (post titles and post content)
