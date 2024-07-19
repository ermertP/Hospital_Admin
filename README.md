Welcome to our joint project!

Instructions on getting set up:
1: Open 2 separate terminals.
2: In your first terminal navigate to the client folder and npm install your package dependencies.
3: In your second terminal, navigate to the server folder and npm install your package dependencies.
4: From your client terminal, run "npm start". This should build your bundled files for the frontend folder and run the application from "localhost/8080". The script for this has hot-reloading, so any changes should be immediately reflected in the bundled/hosted app.
5: From your server terminal, run "npm run dev". This should start your dev server at "localhost/3000". This script has nodemon, so any changes should be immediately reflected by the server.

Notes:
The "client/app.js" file executes a standard fetch request when the page is loaded, which should successfully make a request to "localhost/3000/api" and recieve back a payload of "{
test: 'this is a test',
}".
You should be able to see a console log of "Request hit server" in the server terminal when this happens. You should also be able to see a console log of the response payload in the browser.

Happy hunting!
