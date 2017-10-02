# KelbyOne Developer Challenge

### Project description
At KelbyOne we utilize an internal API to retrieve data for display on the website. For this exercise we would like you to use HTML, CSS and Javascript to read the APIs and display the data in an organized way. We have included a basic starter layout to help out, feel free to use what has been provided (sample HTML structure below for required html elements) or use any frameworks you would like to complete the tasks.
There is no time limit to the test. The amount of time will depend on the approach taken to accomplish the tasks given. Some approaches could be faster, while others might take much longer. 

*We are not as worried about the time it takes to complete or the approach taken (JS library vs vanilla JS). What we are looking for is quality code, creativity, and problem-solving skills.*

To get started just fork this repository into your github account.

### Project scope
On initial load, the user should be presented with a login form. Once the user is successfully logged in they should be presented with a list of the most recent courses as well as a way to filter courses by category. Clicking on an individual course should bring up a detailed view of the course including a list of the lessons for the selected course.
Once you have completed the exercise, please host the files on github.com and add @AdamFrick and @CurtHusting as a collaborator.

### API endpoints
 - Origin: `https://kelbynew.staging.wpengine.com`
 - Namespace: `/wp-json/ko/v2`
 ---
 - `/users/login` Used to authenticate a user on our system.
> Use HTTP Basic Authentication. Simply pass the username and password with the request through the Authorization header. This value should be encoded (using base64 encoding) per the HTTP Basic Authentication specification.
For authentication, please use the following account:
  `Username: FETest`
  `Password: FETest!@#`
---
 - `/courses` Used to retrieve all courses
 - **Available Request Parameters**
   - `per_page`: (optional) INT - Number of courses to retrieve at a time. Defaults to [1]
   - `page`: (optional) INT - Page to retrieve from the result set. Defaults to [1]
---
 - `/categories` Used to retrieve a list of categories
---
 - `/categories/<category_id>/courses` Used to retrieve courses in an individual category
 - **Available Request Parameters**
   - `per_page`: (optional) INT - Number of courses to retrieve at a time. Defaults to [1]
   - `page`: (optional) INT - Page to retrieve from the result set. Defaults to [1]
---
 - `/courses/<course_id>` Used to retrieve information about an individual course
---
 - `/courses/<course_id>/lessons` Used to retrieve all lessons for an individual course
---
### Model definitions

There will be additional data returned from the API, but for this exercise, you will only need the following;
```
  user: {
    display_name: STRING,
    email: STRING,
    first_name: STRING,
    id: INT,
    last_name: STRING
  }
  category: {
    id: INT,
    display_name: STRING
  }
  course: {
    id: INT,
    title: STRING,
    content: STRING,
    duration: INT,
    instructor: EMBEDDED <instructor>,
    num_lessons: INT,
    thumbnail_url: STRING,
    published_date: STRING
  }
  lesson: {
    id: INT,
    title: STRING,
    duration: INT,
    course_id: INT,
    description: STRING,
    published_date: STRING
  }
  instructor: {
    id: INT,
    content: STRING,
    display_name: STRING,
    thumbnail_url: STRING
  }
```

### Sample html structure for demo elements
###### Feel free to use the following pre-styled templates, or create your own
*Filter List (Nav)*
```
<!-- Sample Category Filter Layout -->
<div class="block-title">Sample Filter List</div>
<ul>
  <li class="item">
    <a href="#" class="subhead">Sample Category Name</a>
  </li>
  <li class="item">
    <a href="#" class="subhead active">Sample Category Name</a>
  </li>
  <li class="item">
    <a href="#" class="subhead">...</a>
  </li>
</ul>
```

*Course Grid*
```
<!-- Sample Course Grid Layout -->
<div class="block-title" id="course-list">Sample Course Grid Layout</div>
<div class="grid">
  <div class="item">
    <a href="#course-details"><img class="thumb" src="http://placehold.it/400x225"></a>
    <div class="details">
      <a href="#course-details">
        <h4 class="subhead">Course Title</h4>
      </a>
      <div class="caption">Course Instructor | Published Date</div>
    </div>
  </div>
  <div class="item">...</div>
  <div class="item">...</div>
  <div class="item">...</div>
  <div class="item">...</div>
  <div class="item">...</div>
</div>
```

*Course Detais*
```
<!-- Sample Course Details Layout -->
<div class="block-title left" id="course-details">Sample Course Details Layout</div>
<div class="course">
  <img src="http://placehold.it/1600x900" alt="">
  <div class="details">
    <h1 class="block-title">Course Title</h1>
    <div class="caption">Course Instructor | Published Date</div>
    <p>Course content here.</p>
    <div class="subhead">Lessons</div>
    <ol>
      <li>
        <h3 class="title">Lesson Title</h3>
      </li>
      <li>
        <h3 class="title">Lesson Title</h3>
      </li>
    </ol>
  </div>
</div>
```

*Login Form*
```
<form id="login" method="post">
  <img src="images/kelbyone-logo.png" alt="">
  <label for="username">Username</label>
  <input name="username" type="text" value="FETest" placeholder="username" autocomplete="off">
  <label for="password">Password</label>
  <input name="password" type="password" value="FETest!@#" placeholder="password" autocomplete="off">
  <input type="submit" value="Submit" role="button">
  <p id="error"></p>
</form>
```
