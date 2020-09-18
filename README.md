
# Appointment Booking System

Group project for COSC2101 - Software Engineering - Process & Tools

## Team Members

- Dang Khoi - s3694603

- Nguyen Hoang Lam - s3695543

- Dang Duc Huy - s3678636

- Nguyen Cao Minh Duc - s3689902

  

# Instructions

## For development
### For backend
From /backend folder, Use `mvn jetty:run`. Remember to change database url, user and password in config/AppConfig.js to your local database

`dataSource.setUrl("jdbc:postgresql://localhost:5432/postgres");`
`dataSource.setUsername("postgres");`
`dataSource.setPassword("helloworld");`

### For frontend
From /frontend folder, Use `npm run dev-start`. Remember to change API_URL variable in .env file to your local backend server. For example:

`REACT_APP_API_URL=http://localhost:8080/api`

## For production
### For backend
From /backend folder, use `mvn package` to create a new production build. 

Use `java $JAVA_OPTS -jar target/dependency/webapp-runner.jar --port $PORT target/ABS.war` to start the backend API server

### For frontend
From /frontend folder, Use `npm run build to create new production build`

Use `node server.js` to launch the express server

### Heroku
Backend and frontend is deployed to Heroku applications separately at [backend](https://github.com/JDParadox-alt/SEPT-backend-test) and [frontend](https://github.com/JDParadox-alt/SEPT-frontend-test) respectively
Deployed application can be found at:
[Frontend](https://sept-frontend.herokuapp.com/)
[Backend](https://sept-backend.herokuapp.com/)