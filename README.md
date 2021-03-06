# Pefect Date App
Use this app to find restaurants and events that will take your and your date preferences and return matching and other options. 

## How it works
This app utilizes Eventbrite API to find events and Google Places API to find restaurants. The database is set up in Firebase allowing two users interact with the app within their own sessions. The app uses EmailJS to send an email invite to the second person prompting to complete a form with their preferences. Only after both parties complete the form with their preferences the app will return result. On the result page user will see mathcing options for both restaurants and events if there were any or it'll say "No matches found". All other options will be listed in "Other options" section. 

[**Give it a try!**](https://vaheminasyan2.github.io/The-Perfect-Date-App/)

![Homepage](images/homepage.PNG)

### Technology used:
* JavaScript
* jQuery
* Bootstrap
* HTML
* CSS
* AJAX
* Eventbrite API
* Google Places API
* Firebase
* Email.js.

## How to improve
Currently app is using place and event ids to check for matches. In future this will be improved by adding more sophisticated logic. Also 
Currently in development:
  - Add links to Map and Web for restaurants
  - Add more sohpisitated logic to find matching options
  - Add user authorization with Google or Facebook login
  - Add map and photos
  - More options for preferenes 
  - Improve design
  - Change a date to date range for events
  - Add auto reload of result page
  - Send email to first user as well with the link of his result page
  - Add mobile responsive
  - Replace EventBrite with other API with more event database
  - Replace Google Place API with Yelp or FourSquare API
