# Random Quote Generator
This is a simple web-based Random Quote Generator that displays quotes based on different categories such as Motivational, Funny, and Life. Users can generate new quotes, share them on social media platforms (Twitter and Facebook), toggle between light and dark modes, and save their favorite quotes.

## Features
- **Random Quote Generation**: Generate a random quote from the selected category (Motivational, Funny, Life).
- **Quote Sharing**: Share the displayed quote on Twitter or Facebook with a single click.
- **Dark/Light Mode Toggle**: Toggle between dark and light mode for the application interface.
- **Save Favorite Quote**: Save the current displayed quote as a favorite, which will be stored in the browser's local storage.
- **Background Images**: The background changes randomly between categories (nature, city, technology) every time a new quote is generated.
- **Quote Categories**: Choose from three categories: Motivational, Funny, and Life, to view relevant quotes.

## Files
- `index.html`: The HTML structure for the Random Quote Generator.
- `styles.css`: The CSS for styling the application, including support for light and dark modes.
- `script.js`: The JavaScript for handling the logic of generating, sharing, saving, and switching between modes and categories.

## How to Use
1. Open the `index.html` file in your browser.
2. **Generate a New Quote**: Click the "Get New Quote" button to generate a new quote.
3. **Share the Quote**: Use the "Share on Twitter" or "Share on Facebook" buttons to share the current quote on social media.
4. **Switch Between Categories**: Select a category (Motivational, Funny, Life) from the dropdown to change the quote category.
5. **Toggle Dark/Light Mode**: Click the "Toggle Dark/Light Mode" button to switch between dark and light modes.
6. **Save Favorite Quote**: Click "Save as Favorite" to store the current quote in your browser's local storage for later access.

## How It Works
- **Generate Random Quote**: A random quote is selected from the chosen category and displayed on the page. The background image also changes to match the quote category (nature, city, or technology).
- **Share on Social Media**: Clicking the social media buttons generates a link to share the quote along with the author's name on Twitter or Facebook.
- **Dark/Light Mode**: The background and text colors change based on the selected mode. Light mode is the default, and dark mode is activated by clicking the toggle button.
- **Saving Favorite Quotes**: When you click "Save as Favorite," the current quote is stored in the browser's local storage, allowing you to access it later.

## Local Storage
The application uses the browser’s local storage to save the user's favorite quote. This allows you to keep your favorite quote even after the page is refreshed or closed.

## Requirements
- A modern web browser (Chrome, Firefox, Safari, etc.).
- No additional software or installations required.

## Customization
- You can add more categories to the quote generator by modifying the `categories` object in the JavaScript.
- The background images can be replaced by adding new URLs to the `backgrounds` array.

