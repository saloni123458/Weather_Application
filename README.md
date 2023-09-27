# Express.js Static File Server with Handlebars Templating

This repository contains a basic Express.js server that serves static files and handles routes using the Handlebars (hbs) templating engine.

## Features

- Serve static files (HTML, CSS, JavaScript, images, etc.) using Express.js.
- Use Handlebars (hbs) as the templating engine for rendering dynamic views.
- Define routes for the home page, about page, weather page, and handle 404 errors.
- Custom error page for handling unknown routes.

## Installation

To run this code locally, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone this repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

## Usage

1. After installing the dependencies, start the server using the following command:

   ```
   node server.js
   ```

2. Access the server in your browser by visiting `http://localhost:8000`.

## File Structure

- `public/` - Contains static files (HTML, CSS, JavaScript, images).
- `templates/views/` - Contains the Handlebars templates for rendering views.
- `templates/partials/` - Contains partial templates used by the views.
- `server.js` - Entry point of the server application.

Feel free to explore and modify the code according to your needs. Contributions and enhancements are always welcome!
