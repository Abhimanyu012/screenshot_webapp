# Pinterest Infographic Webapp

This project is a simple web-based infographic designed to demonstrate the benefits of using infographics for effective Pinterest marketing. It features a visually appealing timeline and allows users to take a screenshot of the infographic.

![Infographic Screenshot](infographic-screenshot%20(13).jpg)

## Project Structure

- `frontend/infographic_precise.html`  
  Main HTML file containing the infographic and timeline.

- `frontend/css/infographic.css`  
  Stylesheet for the infographic layout and animations.

- `frontend/js/infographic.js`  
  JavaScript for scroll animations, screenshot functionality, and notifications.

## Features

- Responsive infographic timeline with alternating rows.
- Animated appearance of timeline rows on scroll.
- "Take Screenshot" button to save the infographic as an image (uses [html2canvas](https://html2canvas.hertzen.com/)).
- Notification message when a screenshot is saved.

## Usage

1. Open `frontend/infographic_precise.html` in your web browser.
2. Scroll to view the animated timeline.
3. Click the **Take Screenshot** button to save the infographic as a JPEG image.

## Dependencies

- [html2canvas](https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js) (loaded via CDN)

## Customization

- Edit the timeline steps in `frontend/infographic_precise.html` to change the content.
- Modify styles in `frontend/css/infographic.css` for different themes or layouts.

## License

This project is for demonstration and educational purposes.