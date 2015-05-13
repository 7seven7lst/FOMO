# FOMO

Do you have FOMO | Fear Of Missing Out?

__http://try-fomo.com__

## Summary

FOMO is a crowdsourced notifer app that allows users to subsribe to any event to receive notifications. No more having to track your events across individual sites! The fear of missing out, or [FOMO](http://en.wikipedia.org/wiki/Fear_of_missing_out), describes the issue we are solving.

## Features

- Content from Eventful API
- Instant search
- Trigger notification immediately

## Tech Stack
Angular, Node/Express, PostgreSQL, Jasmine, Bookshelf

## Developer Environment

1. Configure Postgres:
 - Run '\i path/to/schema.sql' to generate db and tables locally.
 - In server/dbConfig/, copy "dbConfig.example.js",rename to "dbConfig.js", AND change the 'username' to your mac username.

1. Run the following in the project directory:

    ```sh
    # install dependencies
    npm install
    bower install

    # start server
    node index.js
    ```

1. Open <http://localhost:3003> in your browser.

## Screenshots
![Image of Event View]
(http://gdurl.com/2erH)

## Team

- David Tan - [github.com/davidtansf](https://github.com/davidtansf)
- Seven Li - [github.com/7seven7lst](https://github.com/7seven7lst)
- Trevor Caverly - [github.com/tjcaverly](https://github.com/tjcaverly)
- Kevin Berg - [github.com/KevinMarkVI](https://github.com/KevinMarkVI)
