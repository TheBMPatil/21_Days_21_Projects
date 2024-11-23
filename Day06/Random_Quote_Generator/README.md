# Day 6: Random Quote Generator

## Description
The **Random Quote Generator** allows users to fetch and display random quotes from an API. The app also includes share functionality, enabling users to share their favorite quotes directly to Twitter or LinkedIn. It demonstrates API integration, dynamic state updates, and clipboard handling in React.

---

## Features
- Fetches a new random quote each time the refresh button is clicked.
- Displays both the quote text and the author.
- Share buttons to post the quote on Twitter and LinkedIn.
- Error handling and fallback quote in case of API failure.

---

## Concepts Learned
- Fetching data from an external API using `async/await`.
- Managing dynamic state with `useState`.
- Handling external events like button clicks and link sharing.
- Clipboard API for sharing quotes on LinkedIn.

---

## Technologies Used
- React (Vite)
- JavaScript (ES6+)
- CSS (Basic styling)
- API Integration (Quotes API)

---

## Challenges Faced
- Handling errors when the API fails to fetch data.
- Formatting the quote text for easy sharing on Twitter and LinkedIn.

---

## Solutions
- Implemented a fallback quote if the API fetch fails.
- Used `navigator.clipboard.writeText` to copy quotes to the clipboard for LinkedIn sharing.
- Used URL encoding to properly format the sharing URLs for social media.

---

## Preview
Attached is a video demonstration showcasing:
1. Fetching a new random quote.
2. Displaying the quote with the author.
3. Sharing functionality for Twitter and LinkedIn.
4. Error handling in case of a failed fetch.

---

## What's Next?
Tomorrow’s project: **Basic Calculator**  
- Building a simple calculator app with basic arithmetic operations.

---

*Stay tuned for more updates!*
