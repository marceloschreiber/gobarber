# Go Barber

## Setup

### Database

This project uses the [PostgreSQL](https://www.postgresql.org/) database. To simplify the setup use docker:

- `docker run --name postgre -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`

Then run all the migrations using:

- `yarn sequelize-cli db:migrate`
