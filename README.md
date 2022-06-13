# KelbyOne Developer Challenge

### Project description
At KelbyOne, we utilize an API to communicate between our backend and frontend. For this exercise we would like you to use HTML, CSS and Javascript to read the APIs and display the data in an organized way. We have included a basic starter layout to help out, feel free to use what has been provided (sample HTML structure below for required html elements) or use any frameworks you would like to complete the tasks.
There is no time limit to the test. The amount of time will depend on the approach taken to accomplish the tasks given. Some approaches could be faster, while others might take much longer. 

*We are not as worried about the time it takes to complete or the approach taken (JS library vs vanilla JS). What we are looking for is quality code, creativity, and problem-solving skills.*

To get started just fork this repository into your github account.

### Project scope
On initial load, the user should be presented with a list of the most recent courses as well as a way to filter courses by category. The user should be able to apply a catagory filter to the list, as well as remove it.
Once you have completed the exercise, please host the files on github.com and add @AdamFrick as a collaborator.

### API endpoints
 - Origin: `https://kelbystaging.wpengine.com`
 - Namespace: `/wp-json/ko/v4`
 ---
 - `/courses` Used to retrieve all courses
 - **Available Request Parameters**
   - `per_page`: (optional) INT - Number of courses to retrieve at a time. Defaults to [10]
   - `page`: (optional) INT - Page to retrieve from the result set. Defaults to [1]
   - `includes`: Comma separated values of hydratable data. You can hydrate `instructors` and `lessons`. Example: `?includes=instructors,lessons`
---
 - `/categories` Used to retrieve a list of categories
---
 - `/categories/<category_id>/courses` Used to retrieve courses in an individual category
 - **Available Request Parameters**
   - `per_page`: (optional) INT - Number of courses to retrieve at a time. Defaults to [10]
   - `page`: (optional) INT - Page to retrieve from the result set. Defaults to [1]
---
 - `/courses/<course_id>` Used to retrieve information about an individual course
---
### Model definitions

There will be additional data returned from the API, but for this exercise, you will only need the following;
```
  category: {
    id: INT,
    title: STRING
  }
  course: {
    id: INT,
    title: STRING,
    content: OBJECT,
    duration: INT,
    instructors: EMBEDDED <instructor>,
    lessons: OBJECT,
    images: OBJECT,
    dates: OBJECT
  }
  instructor: {
    id: INT,
    content: OBJECT,
    title: STRING,
    images: OBJECT,
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
