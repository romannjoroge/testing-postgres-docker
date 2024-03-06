The goal of this repo is to be used to remind myself in the future how to set up an express server with a containerized Postgres database.

The main advantage of using a containerized Postgres database is that as long as I have the compose file and the rest of the start up files I can quickly spin up an instance of a postgres database without having to go through the hustle of installing postgres locally and setting up each and every time.

A disadvantage with this approach is once I take down the container the data in it is lost but this can be solved by using docker volumes which I have also set up. Docker volumes has also allowed me to define some setup scripts