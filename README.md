December 3rd, 2024
Miles Sasaki:
Implemented the update and delete routes in reminder_controller, but update button is showing up as edit for some reason. 

### Done Dec 1st, 2024 , pushed dec 6th 2024
### Chahat Chahat:
Implemented an in-memory database (database.js) for storing reminders under the user cindy@example.com.

### Done Dec 1st, 2024 , pushed dec 6th 2024
### Chahat Chahat:
Created routes in reminder_controller.js for creating, viewing, editing, and deleting reminders.

### Done Dec 1st, 2024 , pushed dec 6th 2024
### Chahat Chahat:
#### User Registration (registerSubmit):

1. Handles registration by checking if the email already exists.
2. Creates a new user with email and password if the email is unique.
3. Redirects the user to the login page after successful registration.

#### User Login (loginSubmit):

1. Verifies user credentials (email and password) against the in-memory database.
2. Redirects to the reminders page on successful login or shows an error message if the credentials are incorrect.
