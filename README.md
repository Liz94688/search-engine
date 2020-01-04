# Interactive Frontend Development Project - Search Engine

Please find a demo of the website [here](https://liz94688.github.io/search-engine/)

I am a big fan of all types of films and so decided to use this project to try and create a search engine for all film fans out there who are looking for more information on their favourite film.

Users to this website will be able to type a film of their choice into the search engine and be provided with the poster, title and a short synopsis attached to that film.

In addition to a specific film, users are also provided with a selection of alternative film titles to browse through that include the same/similar words from their initial search.

## UX
Users are given clarification on the purpose of the website through the title and 'About' section. A clearly defined input box is included to help the user navigate the website and the results are returned in an understandable format    

I made the website as clear and streamline as I could, in order to give the user the most productive and enjoyable experience.

### Wireframes
Below is a link to the wireframes completed for the project (please open in separate tab to see full image):
[Wireframe](https://github.com/Liz94688/search-engine/blob/master/assets/wireframes/IMG-9015.jpg)

### Features
- Easy to use, clean design and straightforward actions needed from the user to interact with the website
- An 'About' button for new users to the website gives further explanation on the purpose of the website and how to use it. Accessed via a small button, there is also a function in place to hide the information when it is no longer needed - maintaining a clean design for good user experience
- Input box - easily identifiable to the user, includes a placeholder for further direction if needed. Designed so that the input box changes colour slightly, as a hint to the user that they have clicked inside the area and can type away
- Set template for each reult returned to improve user experience. Clean design showcasing the information promised - poster, title and synopsis of film. Decided small screens should display a maximunm of 1 result across the page, while larger screens should display a maximum of 3 results across a page
- Alert message displayed to users if their film choice has not returned any results
- Responsive design - tested the website to confirm the title, 'About' button, input box and data results all seamlessly fit onto whatever size screen the user was using at the time - whether it be on a mobile or desktop. CSS grid has been used to achieve this for the data results

### Features Left to Implement
- Pagination - due to the nature of the website and the number of results returned, I feel the design could be improved by placing a maximum number of results per page (around 12)  
- A link to the IMDB website, so that users can search for additional information on their film choice OR an update on the design of the website that includes a link in each card that, when clicked, takes the user to a second page displaying further information taken from TMDB API - i.e. Director, Actors connected to the film

## Technologies Used
- HTML
- CSS
- Javascript
- jQuery (3.4.1)
- Bootstrap (4.4.1)
- Bootswatch (4)
- lodash (4.17.15)

## Testing
Tests were completed to confirm the 'About' button works as intended - appears when the user hovers over the button and disappears when the users mouse/cursor leaves the button area.

Tests were also completed to check the input box was collecting and recording the film choice typed in by the user each time.     

I continuously tested the page loads, layout, responsiveness, Javascript and CSS code of the website in Safari, Google Chrome and Firefox, using DevTools to amend any problems encountered before updating the main code.

After realising not all film choices returned a result, a message was included to alert the user to this circumstance and to update them on the result of their search (lines 36-38 and lines 80-82).

## Deployment
The website has been published using Github Pages technology and you can find a version of this [here](https://liz94688.github.io/search-engine/.). The publishing has been done by using the Master Branch as the source.

## Credits
Content in the 'About' section was written by me.

**Media**
The photo used to alert a user when a 'poster_path' was unavailable was taken from Pexels, a stock image library.

**Acknowledgements**
- Code Institute - tutorials and challenges for Javascript and jQuery helped general learning
- Bootswatch - font, colour-scheme, initial styling on button, input box and cards before I amended each of these in main.css
- Bootstrap - the templates for the form and card elements before I styled each of these in main.css afterwards
- w3School - jQuery tutorials on References and Examples helped with the 'About' button and input box functionality and Javascript tutorials on Variables, Comparison Operators, Conditional (Ternary) Operators and Arrow Functions helped with the main.js code
- Layout Land - specifically the YouTube tutorials given by Jen Simmons on CSS Grid Basics and Creating Flexible Models with CSS Grid helped in creating a responsive design for the website - [Layout Land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)
- The Movie Database API - provided the API data, documentation on registering for an API key, 'Getting Started' and specific code on 'GET API Configuration' and 'Send Request based on Movie ID' [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) 