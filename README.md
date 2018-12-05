# MySQL / Docker Learnings

This is a small repo that does the minimum required to set up and query a MySQL database (running in a Docker container) using Node & Knex.

## MySQL / Docker

To run MySQL in a Docker container, run the following command;

```shell
docker run --name mysql -e MYSQL_ROOT_PASSWORD=mysqlpw -p 3306:3306 -d mysql
```

Now connect to MySQL by doing the following;

```shell
docker exec -it <mysql-container-id> bash
mysql --user=root --password=mysqlpw
```

Create a new database;

```sql
CREATE DATABASE yourdatabase;
```

Create a new user;

```sql
CREATE USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';
```

And grant all privileges;

```sql
GRANT ALL PRIVILEGES ON yourdatabase.* TO 'foo'@'%';
```

## Node & Knex

Now verify that everything is working properly by performing basic CRUD operations. You can do this by running `node index.js`.
