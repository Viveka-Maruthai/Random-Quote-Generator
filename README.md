# Random-Quote-Generator

A web-based **Random Quote Generator** that provides users with inspirational, motivational, funny, and life-related quotes. It allows users to toggle between light and dark modes, change categories, and share quotes on social media.

## Features

- **Random Quotes**: Display a random quote from a selected category (Motivational, Funny, Life).
- **Dark/Light Mode Toggle**: Switch between dark and light modes for a better user experience.
- **Share on Social Media**: Easily share the displayed quote on Twitter or Facebook.
- **Save Favorite Quote**: Save a quote as a favorite in the browser's local storage.
- **Category Selection**: Choose from different categories of quotes (Motivational, Funny, Life).
- **Responsive Design**: The app is responsive and works well on both mobile and desktop devices.

## Technologies Used

- **HTML**: For the basic structure and layout of the page.
- **CSS**: For styling and responsive design of the user interface.
- **JavaScript**: For dynamically generating quotes, handling events, and managing dark/light mode functionality.
- **Local Storage**: Used to store and retrieve favorite quotes.

## How to Use

1. **Get a New Quote**:
   - Click the **Get New Quote** button to display a random quote.
   
2. **Share on Social Media**:
   - Click the **Share on Twitter** or **Share on Facebook** buttons to share the current quote on your social media.

3. **Toggle Dark/Light Mode**:
   - Click the **Toggle Dark/Light Mode** button to switch between dark and light mode.

4. **Change Quote Category**:
   - Use the **Category Dropdown** to select a different category (Motivational, Funny, Life).

5. **Save Favorite Quote**:
   - Click **Save as Favorite** to store the current quote in your browser's local storage. It will be available until you clear your browser data.

## Example

- **Category**: Motivational
- **Quote**: "The only way to do great work is to love what you do."
- **Author**: Steve Jobs

**Bio**: Steve Jobs was the co-founder of Apple and a visionary in technology.

## Code Explanation

- **HTML Structure**:
   - The main structure consists of a heading, a container for the quote text, author, and bio, buttons for generating new quotes, toggling dark/light mode, saving favorites, and sharing on social media.
   - A dropdown allows the user to select a category for the quotes.

- **CSS Styling**:
   - The page has a clean and modern look with a smooth transition effect between light and dark modes. The container has padding, rounded corners, and a subtle shadow for a polished design.

- **JavaScript Functionality**:
   - **generateQuote()**: Randomly selects a quote from the selected category, updates the background image, and displays the quote with a fade-in effect.
   - **saveFavorite()**: Saves the current quote to the browser's local storage and notifies the user.
   - **toggleMode()**: Toggles between dark and light modes by adding/removing a CSS class.
   - **changeCategory()**: Updates the displayed quote based on the selected category.

