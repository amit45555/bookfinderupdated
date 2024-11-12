# Book Finder Application

This is a "Book Finder" web application designed for Alex, a college student, to help search for books using the Open Library Search API. The app allows users to search by title or author, view basic book details, and navigate between pages. It includes a loader for data fetching, a navbar for easy navigation, and a "Not Found" page for unmatched searches.


# Features
Search for Books: Users can enter a book title and search for relevant results from the Open Library API.

Responsive Layout: The app is designed to be responsive, providing a good experience across devices.

Loader: Displays a loading spinner while the app fetches book data.

Error Handling: Displays a message when no books are found or when there is an error fetching data.

Pages:
Home Page: Introduction to the app.
About Page: Information about the app and its features.
Not Found Page: A custom 404 page with an image for incorrect routes

# Technologies Used
React: The main framework used to build the application.

CSS: Plain CSS for styling, including a loading spinner and a background image.

React Router: For handling navigation between pages.

Open Library API: A public API used to fetch book data.



# Project Structure
src/components/Navbar.js - Navbar component with links to Home and About.
src/components/Loader.js - Loader component displayed during data fetch.
src/components/BookCard.js - Card component that displays individual book details.
src/pages/Home.js - Home page containing the search bar and results.
src/pages/BookDetails.js - Detailed view for a single book.
src/pages/NotFound.js - Page displayed when no books match the search query.
src/App.js - Main app component containing routing setup.
src/index.css - Global CSS styling for the app.
