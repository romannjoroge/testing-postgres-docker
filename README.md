# Introduction
The goal of this repo is to be used to remind myself in the future how to set up an express server with a containerized Postgres database.

The main advantage of using a containerized Postgres database is that as long as I have the compose file and the rest of the start up files I can quickly spin up an instance of a postgres database without having to go through the hustle of installing postgres locally and setting up each and every time.

A disadvantage with this approach is once I take down the container the data in it is lost but this can be solved by using docker volumes which I have also set up. Docker volumes has also allowed me to define some setup scripts

# Connecting To Database
To connect to the database first make sure the container is running! To see if the container is running you can run

```bash
docker compose ps
```

The command if ran from the folder that has the docker-compose.yaml file will show the running containers in the docker compose group. Remember to name the file docker-compose.yaml otherwise you would need to specify file in all docker compose commands.

You can know use the details provided in the docker compose file to connect to the postgres container i.e. the user is the postgres user specified in file, host is localhost and the port you mapped to dockers 5432, password is the password set and database is postgres by default or if you specified a database name use that.

# Conclusion
Connecting and using the postgres container is the same as if one installed it locally only that it also gives on the freedom to start up as many other postgres instances with ease.