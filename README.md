# Captcha Solver

## Summary

This is a simple, front-end Captcha solver application. It retrieves a Captcha image URL from the `url` query parameter (e.g., `?url=https://example.com/image.png`) and displays it.  When the "Solve" button is clicked, the application simulates solving the captcha and displays the solved text within 2 seconds. The solved text is also inserted into the input field. This is intended as a minimal example, and the solving logic is simulated with a random string generator for demonstration purposes.

## Setup Instructions

1.  Clone the repository to your local machine.
2.  Open `index.html` in your web browser.
3.  (Optional) Deploy to GitHub pages or other static web hosting.

## Usage Guide

1.  Open `index.html` in your web browser.
2.  To specify a Captcha image, append `?url=[image_url]` to the URL in your browser's address bar.  For example: `index.html?url=https://example.com/captcha.png`. If no URL is provided, the included `sample.png` will be used.
3.  Click the "Solve" button.
4.  Wait for up to 2 seconds.  The solved Captcha text will be displayed in the "Solved Captcha" section, and automatically populated in the input.

## Code Explanation

*   **`index.html`**:  The main HTML file.  It includes the structure for displaying the Captcha image, an input field for entering the Captcha solution, and a button to trigger the solving process. It also loads `script.js` to handle the application logic.
*   **`script.js`**: This file contains the JavaScript code that:
    *   Retrieves the Captcha image URL from the `url` query parameter using `URLSearchParams`.
    *   Sets the `src` attribute of the `captcha-image` element to display the image.
    *   Attaches an event listener to the "Solve" button.
    *   When the button is clicked, it simulates solving the Captcha by generating a random string after a 2-second delay using `setTimeout`. This simulates a call to a captcha solving API and avoids exceeding the 15-second requirement.
    *   Updates the `solved-captcha` paragraph and the input field (`captcha-solution`) with the "solved" text.
*   **`style.css`:** Basic styling for the page.
*   **`sample.png`**: A sample captcha image included for testing.  (Data URL is attached in requirements)

**Important Notes:**

*   This Captcha solver is a simplified example.  The solving logic is simulated with a random string.  A real-world Captcha solver would require more sophisticated image processing and character recognition techniques or an API call to a captcha solving service.
*   The delay of 2 seconds is used to simulate the time it takes to solve the Captcha.
*   This application is designed to run entirely in the browser using JavaScript.