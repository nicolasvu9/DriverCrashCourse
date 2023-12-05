# Running the app

- First cd into the client folder and run `npm install`.
- In `package.json`, change the port in "proxy" to the port on which your server is running.
- In `src/App.js`, replace the component with the page/component you want to render.
- Make sure the server is running, then run `npm run start`. The webpage should pop up automatically in your default browser.

# Page Logic:
## Login/Signup page
- User sign up with a unique username (Error window pops up if it's not unique).
- After successful signup/login, user will be redirected to dashboard/admin page according to their `user_role` stored in cookies. (Note that the user do not need to log in again if they have just signed up).
- If login is not successful, a window will popup saying 'incorrect credentials'.

## Administrative page
- The admin can choose to Create New Practice Questions, Edit Practice Questions, and handle User Suggested Questions.
- The routes are protected so that a user cannot just put '/admin' to access the admin page. They will be redirected to the login page if trying to access a protected page.

  ### Create New Practice Question
  - A form will open in a modal, allowing the admin to input a new question. The submitted question will be stored in the db.
  - TODO: add more validation logic to the creation of question (no empty question body, must be one correct choice, etc.).
  ### Edit Practice Question
  - A list will open in a modal, showing the question body of all practice questions in the db, with a 'Edit' and 'Delete' button next to each question.
  - On 'Edit', a pre-filled form will show up. The admin can edit the content and submit the question. The form will close automatically when the edited question has been submitted, and re-fetch all practice questions in the db to update the UI (Can be done with just updating the questions in the React state, would speed up the load time when the number of practice questions is huge)
  - On 'Delete', a confirmation window will pop up, and if confirmed, the question will be deleted from the db.
  ### User Suggested Question
  - A list will open in a modal, showing the user suggested questions, with a 'View' button next to each question.
  - On 'View', a popup containing the full question will show up. The admin can examine the question and choose to 'Approve' or 'Discard' the question. Approving a question will move that question into the practice questions, and discarding a question will delete it from the suggested questions. UI of the suggested question list will be updated accordingly.

 #### Note: 
 To create an admin account in the db, first create a normal user account in the sign up page. Then log into your Mongo DB Atlas account, go to DriversTest - Collections - users, find your account entry and change the 'role' field from 'user' to 'admin'.


# Utils
## Use of Cookies (**make sure to run `npm install` in the client directory**):
- `js-cookie` is a small, lightweight JavaScript API for handling browser cookies. It provides a straightforward and developer-friendly way of dealing with cookies, which are key-value pairs stored on the client's browser and commonly used for maintaining session state, personalization, and tracking user behavior across web pages.
- At the top of the file, `import Cookies from 'js-cookies'`. 
- Usage Example:
  ```
  import Cookies from 'js-cookie';


  // to set the user token in the cookies
  Cookies.set('access_token', <TOKEN>)
  
  // to retrieve the user token in the cookies
  let token = Cookies.get('access_token')

  // returns "admin" or "user" depending on the role
  let role = Cookies.get('user_role') 
  ```

## React Routes for redirecting pages
- React Router uses a declarative approach to routing. You configure routes using components, specifying a path and the component that should be rendered when that path is accessed.
- `<Routes>` and `<Route>`: Use the `<Routes>` component to define the routing region, and `<Route>` components to define individual routes. Each `<Route>` specifies a path and the component that should be displayed when the user navigates to that path.
- Navigation: Navigation is done either by using `<Link>` to navigate between pages or programmatically using `navigate`.
- Usage Example:
  - In App.js:
    ```
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<ProtectedRoute element={<AdministrativePage />} />} />
    </Routes>
    ```
  
    When the user navigates to "/", the LoginPage component is rendered.
    Protected Admin Page Route: The route "/admin" is wrapped in a ProtectedRoute component. This component checks whether the user is authenticated and has the correct role (admin). If not, it redirects the user.
  - In the page component:
    ```
    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    
    function HomeButton() {
      let navigate = useNavigate();
    
      function handleClick() {
        navigate('/home'); // Navigates to the /home route
      }
    
      return (
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      );
    }
    ```
    In this example, useNavigate is used to navigate to the '/home' route when the button is clicked.
