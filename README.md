<h1 align="center">
  Learning Project: GoBarber
</h1>
<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marceloschreiber/gobarber">

  <a href="https://github.com/marceloschreiber/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marceloschreiber/gobarber">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 💻 Project

Project done while I was learning Node and express to create a simple backend system.

## :memo: Setup

### Database

This project uses:

- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)

To simplify the setup you can use docker:

- `docker run --name postgre -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`
- `docker run --name mongo -p 27017:27017 -d -t mongo`

Then run all the migrations using:

- `yarn sequelize-cli db:migrate`
